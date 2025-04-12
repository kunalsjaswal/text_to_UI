import shutil
import zipfile
from fastapi import FastAPI, File, UploadFile, Body
from fastapi.responses import JSONResponse
from PIL import Image
import io
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import os
import subprocess
import json
from llm.aiderscript import ReactComponentCoder
from llm.transcript import refining_query
from llm.chatModel import chatAgent
import asyncio
import threading
from errors.compile_errors import error_handling_function
from errors.extract_errors import refining_error_query
from react_project import start_vite_app
# from transcript import refining_query

from templates import extract_file_paths


app = FastAPI()
# Add CORS middleware
coder = None

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to the specific origins you want to allow
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)
@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile, dir : str = Body(...)):

    content = await file.read()
    content_str = content.decode('utf-8')

    # print(content_str)
    response = chatAgent(query=content_str, coder=coder, dir=dir)
    # print(refined_query)
    
    

    return {"message": response, "status": True}


@app.post("/query")
async def upload_query(query: str = Body(...), dir: str = Body(...)):

    response = chatAgent(query=query, coder=coder, dir=dir)

    # runtime_error_rectify(dir)
    return {"message": response, "status": True}

@app.get("/run")
async def run_react_app(dir: str):
    global coder
    coder = None
    coder = ReactComponentCoder()
    coder.init_aider(dir)
    os.system("FOR /F \"tokens=5\" %a IN ('netstat -aon ^| find \":3001\" ^| find \"LISTENING\"') DO taskkill /f /pid %a")
    threading.Thread(target=start_vite_app,args=(dir,coder)).start()

    return {"status" : True, "PORT " : 3001}


@app.get("/templates")
async def get_template():
    templates =  extract_file_paths("C:\\Users\\ksinghjaswal\\Desktop\\final_HU_project\\Backend--Meet-to-UI\\templates\src\\user_templates")

    return templates

    

@app.post("/upload_project")
async def upload_folder(zip_file: UploadFile = File(...), project_name: str = Body(...),project_desc: str = Body(...)):
 
    if zip_file.filename.endswith(".zip") and zip_file.file.read(1024 * 25 * 1024) is not None:
 
        temp_dir = os.path.join(os.getcwd(), "temp")
        os.makedirs(temp_dir, exist_ok=True)
        with zipfile.ZipFile(zip_file.file, 'r') as zip_ref:
            zip_ref.extractall(temp_dir)
 
        folder_dir = os.path.join(os.getcwd(), f"temp/{zip_file.filename[:len(zip_file.filename)-4]}")
 
        templates_dir = os.path.join(os.getcwd(), "../","templates","src", "user_templates")
        os.makedirs(templates_dir, exist_ok=True)
        
        try:
            shutil.move(folder_dir, templates_dir)
        except:
            return {"error": f"Folder name with same name already exists!",  "status":False}
       
        # os.remove("temp")
        json_desc = {"name" : project_name, "description":project_desc, "dir":f"C:\\Users\\ksinghjaswal\\Desktop\\final_HU_project\\Backend--Meet-to-UI\\templates\\src\\user_templates\\{zip_file.filename[:len(zip_file.filename)-4]}" ,"image": "https://us-tuna-sounds-images.voicemod.net/d907fb84-bc33-4801-960f-4d4db01c0ed5-1670526673405.png" }
        with open(f"../templates/src/user_templates/{zip_file.filename[:len(zip_file.filename)-4]}/details.json", "w") as f:
            json.dump(json_desc, f, indent=4)
 
        return {"message": f"Project uploaded", "status":True}
    else:
        return {"error": "Invalid zip file or exceeds 25MB size limit", "status":False}

@app.post("/new_project")
async def new_react_app(project_name: str = Body(...), project_desc: str = Body(...)):

    os.system(f"xcopy /s /e /y /i template_folder\\new_project ..\\templates\\src\\user_templates\\{project_name}")
    json_desc = {"name" : project_name, "description":project_desc, "dir":f"C:\\Users\\ksinghjaswal\\Desktop\\final_HU_project\\Backend--Meet-to-UI\\templates\\src\\user_templates\\{project_name}" ,"image": "https://us-tuna-sounds-images.voicemod.net/d907fb84-bc33-4801-960f-4d4db01c0ed5-1670526673405.png" }
    with open(f"{json_desc['dir']}\\details.json", "w") as f:
        json.dump(json_desc, f, indent=4)
 
    with open(f"{json_desc['dir']}\\package.json", "r+") as f:
        packageJson = json.loads(f.read())
        packageJson["name"] = project_name
        f.seek(0)
        f.truncate()
        json.dump(packageJson, f, indent=4)
    git_intilisation = execute_git_commands(json_desc['dir'])
    if git_intilisation['status']=="error":
        return git_intilisation
    
    return {"Status" : True, "Message": "New Project Added!"}

# --------------------------------- Git Api's and functions ------------------------------

branch = "meet-to-ui-branch"
def execute_git_commands(dir):
    commands = [
        ['git', 'init'],
        # ['git', 'remote', 'add', 'origin', repository],
        ['git', 'checkout', '-b', branch],
        ['git', 'add', '.'],
        # ['git', 'status'],
        ['git', 'commit', '-m', 'intialcommit'],
        # # ['git', 'fetch', 'origin', request.branch_name],
        # # ['git', 'rebase', '-X', 'theirs', f'origin/{request.branch_name}'],
        # ['git', 'push', 'origin', request.branch_name],
    ]
 
    try:
        for command in commands:
            subprocess.run(command, cwd=dir, check=True, text=True)
        return {"status": "success", "message": "Git commands executed successfully."}
    except subprocess.CalledProcessError as e:
        return {"status": "error", "message": str(e)}

@app.post("/gitpush")
def execute_git_push(dir,repository):
 
    response = show_origin(dir)
    commands = []
    if response['status']:
        commands = [['git', 'push', 'origin', branch]]
    else:
        commands=[['git', 'remote', 'add', 'origin', repository],
              ['git', 'push', 'origin', branch]]
   
   
    try:
        for command in commands:
            subprocess.run(command, cwd=dir, check=True, text=True)
        return {"status": "success", "message": "Git commands executed successfully."}
    except subprocess.CalledProcessError as e:
        return {"status": "error", "message": str(e)}
   
def show_origin(dir):
    commands=[['git', 'remote', 'show', 'origin']]
    try:
        for command in commands:
            subprocess.run(command, cwd=dir, check=True, text=True)
        return {"status": True, "message": "Git commands executed successfully."}
    except subprocess.CalledProcessError as e:
        return {"status": False, "message": str(e)}
# ---------------------------------Error Handling --------------------------------------


class ErrorLog(BaseModel):
    error: str
    errorInfo: str = None
@app.post("/log-error")
async def log_error(error_log: ErrorLog):
    
    error_prompt=refining_error_query(error_log)
    print(error_prompt)
    coder.resolve_error(error_prompt)
    return {"message": "Runtime error handled"}


# # -------------------------Aider with Image ---------------------------
# @app.post("/upload-image/")
# async def upload_image(image: UploadFile = File(...)):
#     response = coder.get_details_about_image(image)
#     return response

# @app.post("/chat-with-aider/")
# async def aider_chat(query: str):
#     coder.testing_prompt(query)
    
#     return "working"

# @app.get("/get_all_files")
# async def get_files():
#     return coder.get_allFiles()
