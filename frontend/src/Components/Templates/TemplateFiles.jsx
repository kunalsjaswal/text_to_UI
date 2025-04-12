import React, { useEffect, useState } from 'react'
import { TemplateDiv } from './style'
import TemplateCard from './TemplateCard'
import addnewImg from '../../images/addnew.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'
import Loader from '../utilities/Loader'


const TemplateFiles = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [uploadResponse, setUploadResponse] = useState(false)
    const [templates, setTemplates] = useState([])

    useEffect(()=>{
        const fetchTemplates = async()=>{
            setLoading(true)
            try {
                const response = await fetch("http://localhost:8000/templates",{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                
                const json = await response.json()
                setTemplates(
                    [
                        ...json,
                        {
                            name : "Create New",
                            image: addnewImg ,
                            description: <span>
                
                                    Ready to bring your website ideas to life? Our platform enables you to either create a brand new website from scratch or upload and host an existing one, all in a few simple steps. If you have an existing website, we make it easy to transfer it on our platform
                                    <br /> <br />
                
                                    So, let's start building your online presence. Whether it's brand new or an existing masterpiece, we're excited to help you showcase it to the world!
                            </span>,
                        }
                    ]
                )

            } catch (error) {
                alert("Error occured while fetching templates. \n Error: ", error)
            } 
            setLoading(false)
            setUploadResponse(false)

        }
        fetchTemplates()
        // console.log(templates)
    },[uploadResponse])

    const onHomeClickHandler = () =>{
        navigate("/")
    }

    if(loading){
        return <Loader  message="Starting Your Application"/>
    }
  return (
    <div style={{background:" #f8ce9e", position:"absolute", width:"100%",height:"100%"}}>


    <TemplateDiv>
        <header>
            <ArrowBackIcon className="home" onClick={onHomeClickHandler}/>
            <h2>Choose a Template To Start</h2>

        </header>

        <div className="temps">
        <Carousel
            navButtonsAlwaysVisible	 
            indicatorContainerProps={{
                style: {
                    marginTop: '30px',
                }        
            }}
        >

            {
                templates.map((val, indx)=>
                    <TemplateCard key = {indx} val = {val} setLoading = {setLoading} setUploadResponse = {setUploadResponse}/>
                )
            }
        </Carousel>
        </div>
    </TemplateDiv>
    </div>

  )
}

export default TemplateFiles