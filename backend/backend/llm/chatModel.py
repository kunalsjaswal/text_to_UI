from langchain_groq import ChatGroq
from langchain_openai import ChatOpenAI
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain import hub
from langchain.agents import Tool, AgentExecutor, create_structured_chat_agent

from llm.transcript import refining_query
from llm.aiderscript import ReactComponentCoder

from langchain.prompts.chat import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    AIMessagePromptTemplate, 
    HumanMessagePromptTemplate
)


GROQ_LLM = ChatGroq(
            model="llama3-70b-8192",
            temperature=0,
        )
GPT_LLM =ChatOpenAI(temperature=0, model_name="gpt-4o")


def human_response(query):
    template = """
            You are a UI Buddy.
            User is asking a query. However you can only work as a UI Buddy. Give a meaningful small response in 10 to 30 words responding user query and telling him that you can only work for UI related things.  
            USER_QUERY : 
    """
    return GROQ_LLM.invoke(template + query).content

tools = [
    Tool(
        name="transcript",
        func=refining_query,
        description="Use this tool when there is any keyword in the input related to React js or front-end design",
        return_direct=True,
    ),
    Tool(
        name = "Interaction",
        func=human_response,
        description="Use this tool when input has nothing related to React js or front-end design/ development",
        return_direct=True,
    )
]

prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
                    Respond to the human as helpfully and accurately as possible. You have access to the following tools:

                    {tools}
                    
                    Use a json blob to specify a tool by providing an action key (tool name) and an action_input key (tool input).
                    
                    Valid "action" values: "Final Answer" or {tool_names}
                    
                    Provide only ONE action per $JSON_BLOB, as shown:
                    
                    ```
                    
                    {{
                    
                      "action": $TOOL_NAME,
                    
                      "action_input": $INPUT
                    
                    }}
                    
                    ```
                    
                    Follow this format:
                    
                    Question: input question to answer
                    
                    Thought: consider previous and subsequent steps
                    
                    Action:
                    
                    ```
                    
                    $JSON_BLOB
                    
                    ```
                    
                    Observation: action result
                    
                    ... (repeat Thought/Action/Observation N times)
                    
                    Thought: I know what to respond
                    
                    Action:
                    
                    ```
                    
                    {{
                    
                      "action": "Final Answer",
                    
                      "action_input": "Final response to human"
                    
                    }}
                    
                    Begin! Reminder to ALWAYS respond with a valid json blob of a single action. 
                    First check the whole input, 
                    if any part input has anything related to frontend UI web developmen Strictly Use transcript toolt. 
                    Only if no part input has nothing related to frontend UI web development, use interaction tool. 
                    Format is Action:```$JSON_BLOB```then Observation
           """,
        ),
        ("human", """{input}

        {agent_scratchpad}

         (reminder to respond in a JSON blob no matter what)"""),
        ("placeholder", "{chat_history}"),
    ]
)


agent = create_structured_chat_agent(GPT_LLM, tools, prompt)
agent_executor = AgentExecutor(
    agent=agent, tools=tools, verbose=True, handle_parsing_errors=True
)
def descriptive_user_ui_req(query):
        template = """
                You are a React developer, use your knowledge to determine which components and section could you add to enhance the UI. 
                You need to return all components and instructions needed to create the UI. I will pass your instructions to Aider-chat which will build it for me.
                So, give short technical instructions around 20 to 30 words and don't include code in your response.
                If user is asking to update existing Component, then don't add something new, only add what user is asking.
                USER_QUERY : 
        """
        return GPT_LLM.invoke(template + query).content

def chatAgent(query: str, coder: ReactComponentCoder, dir):
    

    agentResponse = agent_executor.invoke({"input": query})
    agentResponse = agentResponse["output"] 
    agentResponseList = agentResponse.split("\n\n")

    if agentResponseList[0]=="tool":


        for i in range (1, len(agentResponseList)): 
            content = descriptive_user_ui_req(agentResponseList[i])
            print("Content : " , content)
            coder.generate_ui(agentResponseList[i], dir)

        return "Your UI has been updated! Please verify."

    else:
        return agentResponse


