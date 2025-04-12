import { useNavigate } from 'react-router-dom';
import botImage from '../../images/bot.png'
import { ChatBotDiv } from './chatbotStyle'
import ChatModel from './ChatModel'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import Loader from '../utilities/Loader';
import axios from 'axios';
import { useEffect } from 'react';

const ChatBot = ( {isOpen, setIsOpen, onToggleHandler} ) => {
  const navigate = useNavigate()
  const onHomeClickHandler = () =>{
      navigate("/")
  }
  const [loading, setLoading] = useState(false)
  const [text, setText] = useState("") // prompt
  const [chats, setChats] = useState(
    [
        {
            human:"",
            ai:["Hi! What can I do for you today?"]
        },
    ]
)
  useEffect(()=>{
    
  },[loading])

  const messages = ["Processing your input...", "Your UI is coming to life! We're hard at work behind the scenes.", "Just a moment, we're crafting your user interface based on the requirements.","Just a few more moments. We're fine-tuning your UI to perfection.","Hang tight! We're transforming your requirements into an appealing UI.","Exciting changes are happening behind the scenes! Your new UI is on its way."]
  
  // fetching Api related to Prompt asked by user
  const updateUI = async() =>{

      setLoading(true)
      setChats(prevChats => [...prevChats, {human:text,ai:[]}]);

      let index = 0
      const loading_message = setInterval(() => {
        setChats(prevChats => {
          const newChat = {...prevChats[prevChats.length - 1]};
          newChat.ai = [...newChat.ai, messages[index]];
          
          return [...prevChats.slice(0, prevChats.length - 1), newChat];
        });
        index = (index + 1) % messages.length
      }, 7000);


      axios.request( {
          method: "post", 
          url: "http://127.0.0.1:8000/query", 
          data: {query:text, dir:localStorage.getItem("dir")}, 
          }).then (data => {
            console.log(data.message)
            setChats(prevChats => {
              const newChat = {...prevChats[prevChats.length - 1]};
              newChat.ai = [...newChat.ai, data.data.message];
    
              return [...prevChats.slice(0, prevChats.length - 1), newChat];
            });

          }).catch(error=>{
              setChats(prevChats => {
                const newChat = {...prevChats[prevChats.length - 1]};
                newChat.ai = [...newChat.ai, "Some Error occured!!. Please try again."];
      
                return [...prevChats.slice(0, prevChats.length - 1), newChat];
              });

          }).finally(()=>{
              clearInterval(loading_message)
              setLoading(false)
              index = 0
          })       
}
 
  return (
    <>
      {loading && <Loader />}
    <ChatBotDiv  id="chat-bot" >

        <button className='home-arrow' onClick={onHomeClickHandler}><ArrowBackIcon/></button>
        <button className="open-chatbot" onClick={onToggleHandler}>
            <img src={botImage} id='bot-img' alt="BOT" />
        </button>
      {

        isOpen &&  <ChatModel updateUI = {updateUI} onToggleHandler = {onToggleHandler} loading={loading}  setLoading = {setLoading} text = {text} setText={setText} chats = {chats} setChats={setChats}/>
      }
    </ChatBotDiv>
    </>
  )
}

export default ChatBot