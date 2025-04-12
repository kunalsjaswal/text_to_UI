
# from langchain_openai import OpenAI
from langchain_core.prompts import PromptTemplate

from io import BytesIO

from langchain_groq import ChatGroq

# We are using a chat model in Groq
llm = ChatGroq(temperature=0.2, model_name="llama3-70b-8192")


def refining_error_query(log):
    template = """
            You are an Expert Prompt engineer. You'll be given error logs, 
            understand the logs properly and generate prompts to give to GPT models. 
            Make sure the prompts handle all the errors occured in error logs that are related to UI.
            If you don't find error related to UI just say no errors related to UI.
            only give prompts in plain text without headings in separate paragraphs. 
            
            USER_REQUEST: {log}

            PROMPT:  
            """

    promt_template = template
    prompt = promt_template.format(log = log)

    output = llm.invoke(prompt)
    
    return output.content
