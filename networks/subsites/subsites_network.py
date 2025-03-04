from pathlib import Path
import networkx as nx
import os
import json
import traceback
from data_mining.file_util import load_configs


if __name__ == "__main__":
    config_path = Path(__file__).parent.parent.parent / "data_mining/configs.yaml"
    print("opening config file", config_path)
    configs = load_configs(config_path)
    for api in configs["apis"]:
        url = api["url"]
        print(f"\t-> {url}")
        
  