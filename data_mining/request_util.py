import os
import cloudscraper
import json
from urllib.parse import urlencode, urlparse, parse_qs, urlunparse

        
def fetch_json(url, headers=None, cookies=None):
    """
    Fetches JSON data from a URL with simplified error handling.
    Returns parsed JSON dict on success, raises Exception on any error.
    """
    scraper = cloudscraper.create_scraper()
    
    default_headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'Accept': 'application/json',
    }
    
    try:
        response = scraper.get(
            url,
            headers={**default_headers, **(headers or {})},
            cookies=cookies,
            timeout=15
        )

        if response.status_code != 200:
            raise Exception(f"HTTP Error {response.status_code}: {response.text[:200]}")

        if 'application/json' not in response.headers.get('Content-Type', '').lower():
            raise Exception("Non-JSON response received")

        return response.json()
        
    except json.JSONDecodeError:
        raise Exception("Invalid JSON response") from None
    except cloudscraper.exceptions.CloudflareChallengeError as e:
        raise Exception(f"Cloudflare challenge failed: {str(e)}") from None
    except Exception as e:
        raise Exception(f"Request failed: {str(e)}") from None


def build_url_with_params(base_url, params):
    if not params:
        return base_url
    
    url_parts = urlparse(base_url)
    query_dict = parse_qs(url_parts.query)
    query_dict.update(params)
    
    new_query = urlencode(query_dict, doseq=True)
    new_url = urlunparse((url_parts.scheme, url_parts.netloc, url_parts.path, url_parts.params, new_query, url_parts.fragment))
    
    return new_url

def handle_api_error(api_url, params):
    page = params.get("@page", 1)
    limit = params.get("@limit", 1)
    data = []
    min = (limit * (page - 1)) + 1
    max = (limit * page) + 1
    for i in range(min, max):
        try:
            params["@page"] = i
            params["@limit"] = 1
            full_url = build_url_with_params(api_url, params)
            #print(full_url)
            chunk = fetch_json(full_url)
            if not chunk:
                break
            print(f"\t\t\t-> sub-page: {page}.{i} -> limit {1}: returns {len(chunk)} records")
            data.extend(chunk)
        except Exception as e:
            if str(e) == "Request failed: Non-JSON response received":
                print(f"\t\t\t-> sub-page: {page}.{i} -> limit {1} [ERROR]")
            else:
                raise e
    return data


def handle_api_error_2(api_url, params):
    data = []
    
    def print_info(page, limit, depth, chunk, error=False):
        depth_str = "\t" * depth
        if error:
            print(f"\t\t{depth_str}-> sub-page: {page} -> limit {limit}: [ERROR]")
        else:
            print(f"\t\t{depth_str}-> sub-page: {page} -> limit {limit}: returns {len(chunk)} records")

    def recursive(page, limit, depth):
        copy = dict(params)
        copy["@page"] = page
        copy["@limit"] = limit
        try:
            
            full_url = build_url_with_params(api_url, copy)
            chunk = fetch_json(full_url)
            data.extend(chunk)
            if not chunk:
                print("imposible??")
            print_info(page, limit, depth, chunk, False)
            
        except Exception as e:
            if str(e) == "Request failed: Non-JSON response received":
                print_info(page, limit, depth, None, True)
                if limit != 1:
                    recursive((page * 2) - 1, limit // 2, depth + 1)
                    recursive((page * 2),     limit // 2, depth + 1)
            else:
                raise e
        
            
    limit = params.get("@limit", 1) / 2
    page = (params.get("@page", 1) * 2) - 1
    recursive(page, limit, 1)
    page = (params.get("@page", 1) * 2)
    recursive(page, limit, 1)

    return data
    

def fetch_data(api_url, file_path, params=None, append=False, save=True):
    data = []
    if append and os.path.exists(file_path):
        data = json.load(open(file_path, "r", encoding="utf-8")) 
        print(f"\t\t-> loaded {len(data)} records")
    
    if not params or "@limit" not in params:
        full_url = build_url_with_params(api_url, params)
        chunk = fetch_json(full_url)
        if chunk:
            # if chunk is a dict, convert it to a list
            if isinstance(chunk, dict):
                chunk["url"] = full_url
                chunk = [chunk]
        data.extend(chunk)
    else:
        original_limit = params["@limit"]
        page = 1
        while True:
            try:
                params["@page"] = page
                params["@limit"] = original_limit
                
                full_url = build_url_with_params(api_url, params)
                chunk = fetch_json(full_url)
                if not chunk:
                    break
                print(f"\t\t-> page: {page} -> limit {original_limit}: returns {len(chunk)} records")
                data.extend(chunk)
            # Exception: Request failed: Non-JSON response received
            except Exception as e:
                if str(e) == "Request failed: Non-JSON response received":
                    print(f"\t\t-> page: {page} -> limit {original_limit} [ERROR]")
                    #chunk = handle_api_error(api_url, dict(params))
                    chunk = handle_api_error_2(api_url, dict(params))
                    if chunk:
                        data.extend(chunk)
                else:
                    raise Exception(f"{e}")
            page += 1
    if save:  
        try:
            print(f"\t\t-> fetched {len(data)} records")
            with open(file_path, "w", encoding="utf-8") as file:
                json.dump(data, file, indent=4)
        except Exception as e:
            raise Exception(f"Failed to save data to {file_path}: {e}")
    return data