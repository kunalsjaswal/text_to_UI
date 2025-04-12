import React, {useEffect, useState}  from 'react'
import { TemplateCardDiv } from './style'
import {  Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import UploadProject from './UploadProject'
import CreateProject from './CreateProject'

const TemplateCard = ({val, setLoading, setUploadResponse}) => {
  const {name, description, image, dir} = val
  const navigate = useNavigate()


  const handleStartButtonClick = async() => {
      setLoading(true)
      localStorage.setItem("dir", dir)
      const response = await fetch(`http://localhost:8000/run?dir=${dir}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
      })
      const json = await response.json()
      if(!json.status){
         window.alert("Project Don't Exist")
      }

      setTimeout(() => {
        setLoading(false)
        navigate("/playground")

      }, 7000);


  };

  const [openUploadProject, setOpenUploadProject] = useState(false);
  const [openNewProject, setOpenNewProject] = useState(false);
  const [projectName, setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [file, setFile] = useState(null)


  const handleOpenUploadProject = () => {
    setOpenUploadProject(true);
  };
  const handleCloseUploadProject = () => {
    setProjectName("")
    setProjectDescription("")
    setFile("")
    setOpenUploadProject(false);
  };

  const handleUploadProject = async() =>{
     if(file === null || projectName.length === 0 || projectDescription.length === 0){
      alert("Please fill all fields to upload")
      return 
     }

     setLoading(true)
     // Create a new FormData instance
    const formData = new FormData();

    // Append the zip file to the form data
    formData.append('zip_file', file);

    // Append the project_name and project_desc to the form data
    formData.append('project_name', projectName);
    formData.append('project_desc', projectDescription);

     console.log(formData)
    const response = await fetch("http://localhost:8000/upload_project",{
      method:"POST",
      body: formData
    })
    const json = await response.json()
    if(!json.status){
      alert(json.error)
    }
    setLoading(false)
    setUploadResponse(true)
    handleCloseUploadProject()

  }

  const handleOpenNewProject = () => {
    setOpenNewProject(true);
  };
  const handleCloseNewProject = () => {
    setOpenNewProject(false);
  };


  const handleNewProject = async() =>{

    if(projectName.length === 0 || projectDescription.length === 0){
      alert("Please fill all details")
    }

    setLoading(true)
    const body = {
      project_name: projectName,
      project_desc: projectDescription,
    };
     // Api for adding a new Project 
    try {
      const response = await fetch("http://localhost:8000/new_project",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })
      const json = await response.json()
    } catch (error) {
       alert(error.message)    
        setLoading(true)
    }
    setLoading(true)
    setUploadResponse(true)
    handleCloseNewProject()
  }
  return (

    
    <TemplateCardDiv className='card'>
      
      <aside className="left">
        <img src={image} alt={name} style={{width: "80%"}}/>

      </aside>
      <aside className="right">
        <h2>{name}</h2>
        <p>{description}</p>

        {
          name === "Create New" ? 
          <div  style={{display: "flex", gap:"20px"}}>
              <Button variant='contained' color='primary' style={{fontWeight:"bold"}} onClick={handleOpenUploadProject}>UPLOAD</Button>
              <Button variant='contained' style={{background:"#5bb59b", color:"white", fontWeight:"bold"}} onClick = {handleOpenNewProject}>CREATE NEW</Button>
          </div>:
          <Button variant='contained' color={name === "Netflix" ? 'error' : 'info'} onClick={handleStartButtonClick} style={{fontWeight:"bold"}}>BUILD</Button>
        }

        <UploadProject handleClose={handleCloseUploadProject} open={openUploadProject} file={file} setFile={setFile} handleUploadProject={handleUploadProject} projectName = {projectName} setProjectName = {setProjectName} projectDescription={projectDescription} setProjectDescription={setProjectDescription}/>
        <CreateProject handleClose={handleCloseNewProject} open={openNewProject}  handleUploadProject={handleNewProject} projectName = {projectName} setProjectName = {setProjectName} projectDescription={projectDescription} setProjectDescription={setProjectDescription}/> 
      </aside>
    </TemplateCardDiv>
  )
}

export default TemplateCard