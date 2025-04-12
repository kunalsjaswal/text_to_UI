from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq
from langchain_openai import ChatOpenAI
from langchain.prompts.chat import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    AIMessagePromptTemplate, 
    HumanMessagePromptTemplate
)

# To create our chat messages
from langchain.schema import (
    AIMessage,
    HumanMessage,
    SystemMessage
)

# We are using a chat model in Groq
llm = ChatOpenAI(temperature=0, model_name="gpt-4o")
llm2 = ChatGroq(temperature=0, model_name="llama3-70b-8192")


template="""

You are a professional web developer in React js. Your task is to divide a task related to React development into smaller, manageable and independent subtasks. 
I have a complex task that I need to complete. Please help me divide this task into smaller, manageable sub-tasks. The sub-tasks should cover all necessary aspects from planning to implementation. Here is an example of how a task could be divided into sub-tasks:
divide the task strictly into 3 sub tasks, the first sub task will give the stucture of the task. Second sub task will give the functionality and content of the task. and third task will give proper styling and design to the task.
**Example Task: Create a Navigation Bar for a Website**

1. Create the react structure of Nav bar.
2. Add sections and menu items, Integrate links and interactions.
3. Style the navigation bar with material UI, make the navigation bar responsive, add interactive elements using JavaScript.

Using this format as a guide, please provide a detailed breakdown of each step required to complete my task.
ng to the plan.

only give the the three subtasks in three paragraphs without and headings or special characters.


"""
system_message_prompt = SystemMessagePromptTemplate.from_template(template)

human_template="{text}" # Simply just pass the text as a human message
human_message_prompt = HumanMessagePromptTemplate.from_template(human_template)

chat_prompt = ChatPromptTemplate.from_messages(messages=[system_message_prompt, human_message_prompt])

chain = chat_prompt | llm2

def primaryTasks(requirement: str):
    output = chain.invoke({
                    "text": requirement,
                   })
    primaryRequirements = output.content.split('\n\n')

    return primaryRequirements

# test = primaryTasks("Create a footer")
# print(test)
# print(len(test))