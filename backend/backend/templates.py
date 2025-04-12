import os
import json

def extract_file_paths(src):
    template_list = []
    for root, dirs, files in os.walk(src):
        for file in files:
            if file == "details.json":
                f = open(root+"\\"+file)
                data = json.load(f)
   
                f.close()
               
                template_list.append(data)
    return template_list