import React, { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import micImage from '../../images/mic.png'
import recordingImg from '../../images/recording.gif'
import Timer from './Timer'

const MicComponent = ({text, setText, toggleClick, file}) => {
    
    // const [time,setTime] = useState(0)
    
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable
    } = useSpeechRecognition();
    
    useEffect(() => {
        if (listening) {
            setText(transcript)
        }
    }, [transcript, listening])
        
    useEffect(()=>{
        onMicStopClickHandler()
        setText("")
    },[toggleClick])

      if (!browserSupportsSpeechRecognition) {
        console.log("Browser doesn't support speech recognition.")
      }
      
      const onMicClickHandler = ()=>{
        if(!isMicrophoneAvailable){
            console.log("No microphone detected")
            return
        }
        if(file){
          alert("File Is already selected. Remove it to start using mic.")
          return
        }
        resetTranscript()
        SpeechRecognition.startListening({ continuous: true })
      }
      const onMicStopClickHandler = () =>{
        SpeechRecognition.stopListening()
        setText(transcript)
      }
      const handleMicButton = () =>{
        if(listening){
            onMicStopClickHandler()
        }
        else{
            onMicClickHandler()
        }
      }

  return (
      <button onClick={handleMicButton} >
        {
            listening ? 
            <img src={recordingImg}  className='mic-record-img' alt="mic" />:
            <img src={micImage}  className='mic-img' alt="mic"/>
        }
        {
            listening && 
            <Timer listening={listening}/>
        }
      </button>
  )
}

export default MicComponent