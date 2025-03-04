from pathlib import Path
from data_mining.file_util import load_configs, create_folder_if_not_exists
from data_mining.request_util import fetch_data
import traceback
import time

def setup():
    config_path = Path(__file__).parent / "configs.yaml"
    configs = load_configs(config_path)
    #print(configs)
    data_path = Path(__file__).parent.parent / configs["data_folder"]
    create_folder_if_not_exists(data_path)
    return configs, data_path

if __name__ == "__main__":
    configs, data_path = setup()
    
    for api in configs["apis"]:
        url = api["url"]
        if not api.get("enabled", True):
            print(f"\t-> (skipping) {url}")
            continue
        append = api.get("append", False)
        file_name = data_path / api["file_name"]
        params = api.get("params", {})
        
        print(f"\t-> {url}")
        print(f"\t\t-> params {params}") 
        
        try:
            fetch_data(api["url"], file_name, params=params, append=append )
            time.sleep(0.5)
        except Exception as e:
            print(f"\t\t-> error: {e}")
            traceback.print_exc()
        
        print(f"\t\t-> saved to {file_name}")
    
    
    