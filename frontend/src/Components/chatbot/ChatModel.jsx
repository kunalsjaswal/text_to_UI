import React, { useEffect, useRef, useState } from 'react'
import { ChatModelDiv } from './chatbotStyle'
import { Button} from '@mui/material';
import styled from 'styled-components';
import MicComponent from '../utilities/MicComponent';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from 'axios';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SendIcon from '@mui/icons-material/Send';
import AdbIcon from '@mui/icons-material/Adb';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Typing from '../utilities/Typing';
import PushToGit from './PushToGit';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const ChatModel = ({updateUI, onToggleHandler, loading, setLoading, text, setText, chats, setChats}) => {
    const modelRef = useRef();
    const [toggleClick, setToggleClick] = useState(false) // mic toggle
    const [theme, setTheme] = useState(false)

    const messages = ["Uploading your file...", "Reading your File Content ...", "Getting insights from your file ..", "Your UI is coming to life! We're hard at work behind the scenes.", "Just a moment, we're crafting your user interface based on the requirements.","Just a few more moments. We're fine-tuning your UI to perfection.","Hang tight! We're transforming your requirements into an appealing UI.","Exciting changes are happening behind the scenes! Your new UI is on its way."]

    // uploading file and getting UI updates 
    const onUploadClickHandler = async() =>{
        setLoading(true)
        setChats(prevChats => [...prevChats, {human:"File Uploaded",ai:[]}]);
        console.log(chats)

        let formData = new FormData()
        formData.append('file', file)
        formData.append('dir', localStorage.getItem("dir"))


        let index = 0
        const loading_message = setInterval(() => {
            setChats(prevChats => {
            const newChat = {...prevChats[prevChats.length - 1]};
            newChat.ai = [...newChat.ai, messages[index]];
            
            return [...prevChats.slice(0, prevChats.length - 1), newChat];
            });
            index = (index + 1) % messages.length
        }, 5000);


        axios.request( {
            method: "post", 
            url: "http://127.0.0.1:8000/uploadfile", 
            data: formData, 
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
                setFile(null)
                index = 0

            })      
    }
    
    const onSubmitClickHandler = async() =>{
        if(loading){
            return
        }
        if(text.length === 0 && file === null){
            const newChat = { ...chats[chats.length - 1] };
            newChat.ai = [...newChat.ai];
            
            newChat.ai.push("Please enter prompt");
          
            const newChats = [...chats.slice(0, chats.length - 1), newChat];
          
            setChats(newChats);
            return
        }

        if(text.length > 0){
            updateUI()
            setText("")
        }
        else if (file !== null){
            onUploadClickHandler()
        }
        setToggleClick(prev => !prev)

        
    }

    
    const [file, setFile] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const scrollRef = useRef(null);
    
    useEffect(() => {
        if (scrollRef.current) {
           scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chats]); // Depend on chats

    
    // data-aos="fade-up"
  return (
    <ChatModelDiv id='model-section' ref={modelRef} data-aos="fade-up" style={{background: theme ?  "#404040eb": "#ffffffea" }}>

        <header style={{backgroundColor : theme ? "#404040":"#F7C171", color : theme ? "white" : "#404040"}}>
            <AdbIcon fontSize='large' className='bot-icon' style={{borderColor : theme ? "white" : "#404040"}}/>
            <aside>
                <h3>Chat Bot</h3>

                <div className="icons" style={{display:"flex", alignItems:"center", gap:"10px"}}>
                    {
                        theme ? 
                        <Brightness4Icon style={{cursor:"pointer"}} onClick={() => setTheme(prev => !prev)}/>:
                        <Brightness7Icon style={{cursor:"pointer"}} onClick={() => setTheme(prev => !prev)}/>
                    }
                    <CloseIcon fontSize='medium' style={{cursor:"pointer"}} onClick={onToggleHandler}/>
                </div>
            </aside>
        </header>

        <section className="chat-history" ref={scrollRef}>
            {
                chats.length && chats.map((val,indx) => (

                    <div key={indx}>
                        {
                            val.human &&
                            <div className='human-chat' >
                                <span style={{background: !theme ?  "#404040": "#ffffff" , color : theme ? "#404040" : "white"}}>{val.human}</span>
                                <AccountCircleIcon fontSize='large' style={{ color : !theme ? "#404040" : "white"}}/>
                            </div>
                        }
                        {
                            val.ai.map((val,index)=>(
                                <div className='ai-section'>
                                    <SmartToyIcon fontSize='medium' style={{color:"white", background: !theme ? "#FFCC80": "#404040" , borderRadius:"50px", padding:"5px", marginRight:"5px"}}/>
                                    <div className='ai-chat' key={index} style={{background: !theme ?  "#FFCC80": "#646363" , color : theme ? "white" : "black", borderColor: theme ? "#646363" : "#FFCC80"}} >
                                        {val}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
                {
                    loading && 
                    <div className='ai-section'>
                        <SmartToyIcon fontSize='medium' style={{color:"white", background: !theme ? "#FFCC80": "#404040" , borderRadius:"50px", padding:"5px", marginRight:"5px"}}/>
                        <Typing color={theme ? "white" : "black"} background={!theme ?  "#FFCC80": "#404040"}  />
                    </div>
                }
        <div>

            </div>
        </section>

        <main>
            
           

            <div className="submit">

                <AttachFileIcon fontSize='large' style={{cursor:"pointer", color: !theme ?  "#404040": "white"}} onClick = {() => setIsOpen(prev => !prev)}/>
                <input 
                            tyoe="text" 
                            disabled = {file && true}
                            className='textarea'  
                            placeholder='Enter Your Prompt here'
                            value={text}
                            style={{background: theme ?  "transparent": "#ffffff28", color: !theme ?  "#404040": "#ffffff", placeContent:"here"}}
                            onChange={ev => setText(ev.target.value)}
                />
                <SendIcon className='submit-btn' fontSize='large'  style={{color: !theme ?  "#404040": "white"}} onClick={onSubmitClickHandler}/>
            </div>

            {
                isOpen &&
                <div className="options" data-aos="slide-down" data-aos-duration="300">
                    <div className='mic-div'>
                        <MicComponent file = {file} text= {text} setText={setText} toggleClick = {toggleClick}/>
                    </div>

                    <Button variant ="outlined" color='info' style={{fontWeight:"bold", color: !theme ?  "#404040": "white", borderColor:!theme ?  "#404040": "white"}}>Z O O M</Button>
                    <PushToGit theme = {theme} setLoading = {setLoading}/>
                    <Button
                        component="label"
                        role={undefined}
                        variant="outlined"
                        color='inherit'
                        className='upload-btn'
                        tabIndex={-1}
                        style={{color: !theme ?  "#404040": "white"}}
                    >
                        {
                            file ? 
                            <CheckCircleOutlineIcon color='success'/>:
                            <UploadFileIcon/>
                        }
                        <VisuallyHiddenInput type="file" accept=".txt" onChange = {(ev)=> setFile(ev.target.files[0])}/>
                    </Button>
                    
                </div>
            }
            

        </main>

        
    </ChatModelDiv>
  )
}

export default ChatModel