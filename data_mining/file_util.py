import yaml
import sys
import os

def load_configs(config_path):
        try:
            with open(config_path, "r") as file:
                return yaml.safe_load(file)
        except FileNotFoundError:
            print(f"\nError: Configuration file '{config_path}' not found!")
            sys.exit(1)
        except yaml.YAMLError as e:
            print(f"\nError: Invalid YAML syntax in configuration file:\n{e}")
            sys.exit(1)

def create_folder_if_not_exists(folder_path):
    if not os.path.exists(folder_path):
        print(f"Creating folder: {folder_path}")
        os.makedirs(folder_path)

def remove_file_if_exists(file_path):
    if os.path.exists(file_path):
        print(f"Removing file: {file_path}")
        os.remove(file_path)