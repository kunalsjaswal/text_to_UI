# To split our transcript into pieces

# Prompt templates for dynamic values
from langchain.prompts.chat import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    AIMessagePromptTemplate, 
    HumanMessagePromptTemplate
)


from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq
from langchain_openai import ChatOpenAI



llm = ChatOpenAI(temperature=0.3, model_name="gpt-4o")
llm2 = ChatGroq(temperature=0.3, model_name="llama3-70b-8192")

template="""

You are a helpful assistant that helps to extract the requirements that are mentioned in the input.
Your goal is to extract all the key requirements for the website development project. Put the related requirements together in a single sentence. 
Creater separate paragraph for unrelated requirements.
If you don't find any requirement simply "", don't use any section name in the output also don't use any response message like "No requirements mentioned". 
Directly give the requirements in clear points and don't write any other thing.
list the requirements without including the introductory line like "Here are the requirements categorized into sections:"
dont use any special character or symbol in the output
Heading of the output should be 'tool'


"""
system_message_prompt = SystemMessagePromptTemplate.from_template(template)

human_template="{text}" # Simply just pass the text as a human message
human_message_prompt = HumanMessagePromptTemplate.from_template(human_template)


chat_prompt = ChatPromptTemplate.from_messages(messages=[system_message_prompt, human_message_prompt])
chain = chat_prompt | llm

def refining_query(content: str):
    
    output = chain.invoke({
                    "text": content,
                   }).content

    return output