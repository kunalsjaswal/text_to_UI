import styled from "styled-components";

export const ChatBotDiv = styled.div`
    position: fixed;
    left: 2%;
    bottom: 2%;
    width: 50px;
    button.home-arrow{
        position: fixed;
        color:#585857;
        top: 1%;
        cursor: pointer;
        border: 1px solid gray;
        border-radius: 5px;
    }
    button.open-chatbot{
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s;
        box-shadow: 0px 0px 2px black;
    }
    button.open-chatbot:hover{
        scale: 1.1;
    }
    img{
        border-radius: 5px;
        width: 100%;
    }
`

export const ChatModelDiv = styled.div`
    position: fixed;
    bottom: 10%;
    left: 2%;
    /* border-radius: 10px; */
    width: 400px;
    box-shadow: 0px 0px 2px black;
    background: #ffffff;

    ::-webkit-scrollbar {
        width: 0px;
    }

        /* Track */
    ::-webkit-scrollbar-track {
        background: #d1cfcf; 
    }
        
        /* Handle */
    ::-webkit-scrollbar-thumb {
        background: gray; 
    }

    header{
        color: #404040;
        display: grid;
        grid-template-columns: 15% 85%;
        align-items: center;
        /* background-color: #404040;s */
        background-color: #F7C171;
        padding: 0px 5px;
        /* border-top-right-radius: 8px; */
        /* border-top-left-radius: 8px; */
        /* border-bottom: 2px solid #404040; */
        
        .bot-icon{
            border-radius: 50px;
            /* color: #404040; */
            border: 2px solid #404040;
            padding: 5px;
        }
        aside{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

    }

    section.chat-history{
        height: 350px;
        padding: 5px;
        margin-top: 5px;
        border-radius: 5px;
        overflow: auto;
        transition: 0.4s;
        .human-chat{
            display: flex;
            justify-content: flex-end;
            margin-top: 10px;
            width: 90%;            
            margin-left: 10%;
            span{
                width: fit-content;
                background:#404040;
                padding: 5px 10px;
                border-radius: 10px;
                color: white;
                margin-top: 20px;
                font-weight:600;
            }

        }
        
        .ai-section{
            display: flex;
            align-items: center;
            width: 90%;

            .ai-chat{
                margin-top: 30px;
                max-width: 80%;
                width: fit-content;
                padding: 5px 10px;
                border-radius: 10px;
                border: 2px solid #FFCC80;
                background: #FFCC80;
                color: black;
                font-weight: bold;
            }
        }
    }

    main{
        display: flex;
        flex-direction: column;
        margin-top:10px;


        .options{
            display: grid;
            align-items: center;
            justify-content: space-evenly;
            grid-template-columns: 30% 30% 15% 15%;
            margin-bottom: 10px;
            .mic-div{
                button{
                    background-color: white;
                    border: 1px solid gray;
                    height: 38px;
                    border-radius: 3px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .mic-img{
                        width: 30px;
                    }
                    .mic-record-img{
                        width: 60px;
                    }
                }
            }
            button{
                width: 100%;
            }
            
        }
        

        .submit{
            margin-top: 10px;
            display: grid;
            grid-template-columns: 10% 78% 8%;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            /* border: 1px solid #404040; */
            padding: 5px;
            border-radius: 5px;
            .textarea{
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                background-color: white;
                border-radius: 5px;
                /* border: 1px solid black; */
                border: 0;
                padding: 5px;
                scale: 1.1;
            }
            .textarea:focus{
                outline: none;
            }
            .submit-btn{
                /* color :  white; */
                cursor: pointer;

            }
        }

    }
`