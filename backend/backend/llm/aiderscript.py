from aider.coders import Coder
from aider.models import Model
from aider.io import InputOutput
import os
from langchain_openai import ChatOpenAI


class ReactComponentCoder:
    def __init__(self, model_name="gpt-4o", weak_model_name="gpt-4-turbo"):
        self.io = InputOutput(yes=True)
        self.model = Model(model_name, weak_model=weak_model_name)
        self.coder = None

    def extract_file_paths(self, src):
        src = f"{src}/src/Components"
        file_paths = []
        for root, dirs, files in os.walk(src):
            for file in files:
                if file.split(".")[-1] == "jsx":
                    file_paths.append((root + "/" + file).replace("../", "").replace("\\", "/"))
        return file_paths

    def init_aider(self, dir):
        fnames = self.extract_file_paths(dir)
        fnames.append(f"{dir}/src/App.jsx")
        # print(fnames)

        self.coder = Coder.create(main_model=self.model, io=self.io, fnames=fnames)

    def generate_ui(self, inp, dir):
        dir = dir.replace("\\", "/")

        system1 = f"""
            You are a smart React js developer
            Use material-ui mui/material, styled-components to give proper styling, don't use makeStyles frmo material
            make sure of proper imports of material ui and components.
            For navigation use react-router-dom, like BorserRouter, Routes and Route.
            If any existing component is being updated, carefully make the required changes and imports in the existing components.
            If you create any new component add that component file in the chat.
            Also import that component in App.jsx.
            Always create new components inside {dir}/src/Components folder.
        """
        query = inp
        input = system1 + query

        self.coder.run(input)



    def resolve_error(self, inp):

        system1 = f"""
            You are a smart React js developer who can understand and resolve errors in React js code
            your task is to analyze the error {inp} and perform necessary actions to resolve the error.
        """
        query = inp
        input = system1 + query

        self.coder.run(input)

    # # new function to get details about the image

    # def get_details_about_image(self, image):
    #     # self.coder.add_rel_fname(image_dir) 
    #     # print(self.coder.get_inchat_relative_files())

    #     system1 = f"""
    #         This image will contain UI UX and your job is to list the feature and components this image contains.
    #         image : 
    #     """
    #     GPT_LLM = ChatOpenAI(temperature=0, model_name="gpt-4o")

    #     return GPT_LLM.invoke(image).content

    # # normal prompts
    # def testing_prompt(self, query):
    #     self.coder.run(query)
    
    # def get_allFiles(self):
    #     return self.coder.get_inchat_relative_files()

    
