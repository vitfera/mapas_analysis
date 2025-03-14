import argparse
import time
import traceback
from pathlib import Path
from data_mining.file_util import load_configs, create_folder_if_not_exists
from data_mining.request_util import fetch_data

def setup(config_file):
    config_path = Path(__file__).parent / config_file
    configs = load_configs(config_path)
    data_path = Path(__file__).parent.parent / configs["data_folder"]
    create_folder_if_not_exists(data_path)
    return configs, data_path

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Programa de mineração de dados.")
    parser.add_argument(
        "--config",
        type=str,
        default="configs_minc.yaml",
        help="Caminho para o arquivo de configuração (padrão: configs_minc.yaml)"
    )
    args = parser.parse_args()

    configs, data_path = setup(args.config)
    
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
            fetch_data(url, file_name, params=params, append=append)
            time.sleep(0.5)
        except Exception as e:
            print(f"\t\t-> error: {e}")
            traceback.print_exc()
        
        print(f"\t\t-> saved to {file_name}")