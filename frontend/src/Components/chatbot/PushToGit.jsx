import React, { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled as st} from '@mui/material/styles';
import { Dialog, DialogTitle, IconButton, DialogContent, DialogActions, TextField, Button, FormLabel, TextareaAutosize} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const BootstrapDialog = st(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

const PushToGit = ({theme, setLoading}) => {

    const [open, setOpen] = useState(false)
    const [repoLink, setRepoLink] = useState("")

    const [prevRepoLinks, setPrevRepoLinks] = useState([])
    

    const handleClose = () =>{
        setRepoLink("")
        setOpen(false)
    }
    const handleOpen = () =>{
        setOpen(true)
    }


    const onGitPushClickHandler = async()=>{

        if(!prevRepoLinks.includes(repoLink)){
            setPrevRepoLinks(prev => [...prev, repoLink])
        }
        setLoading(true)
        setOpen(false)
        try {
            axios.request( {
                method: "post", 
                url: `http://127.0.0.1:8000/gitpush?dir=${localStorage.getItem("dir")}&repository=${repoLink}`, 
            }).then (data => {
            }).catch(error=>{
                alert(error.message)
            }).finally(()=>{
                handleClose()
                setLoading(false)
            })   
            
        } catch (error) {
            alert(error.message)
            setLoading(false)
        }

    }
  return (
    
    <>
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            fullWidth
        >
            <DialogTitle sx={{ m: 0, p: 2}} id="customized-dialog-title">
                <b>Enter Your Git Repository Link </b>
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent dividers style={{width:"90%", margin:"auto", display:"flex", flexDirection:"column", gap:"20px"}}>
                <FormLabel style={{display:"flex", alignItem:"self-end", gap:"10px"}} className='info'>Adding your project in  
                    <img style={{width:"25px"}} src="https://cdn.iconscout.com/icon/free/png-512/free-git-branch-3604253-3003896.png?f=webp&w=256" alt="branch" />
                <span style={{background:"#CECECE", color:"#404040", fontWeight:"700", borderRadius:"5px", padding:"3px 5px"}}>meet-to-ui-branch</span></FormLabel>
                
                {
                    prevRepoLinks.length > 0 && 
                    <div className="prev-links" style={{display:"flex", flexDirection:"column", gap:"5px", borderRadius:"10px", border:"1px solid gray", padding:"5px"}}>
                        <h3 style={{marginLeft:"10px", margin:"5px"}}>Previously used Repository links</h3>
                        {
                            prevRepoLinks.map((val,index)=>(
                                <div style={{display:"flex", gap:"10px", alignItems:"inherit"}}>
                                    <GitHubIcon/>
                                    <FormLabel key={index} onClick={() => setRepoLink(val)} style={{padding:"3px 5px", cursor:"pointer"}}>{val}</FormLabel>
                                </div>
                            ))
                        }
                    </div>
                }
                <TextField id="outlined-basic" fullWidth placeholder="Enter Git Repository link " value={repoLink} onChange={(ev) => setRepoLink(ev.target.value)} variant="outlined" />

            </DialogContent>
            <DialogActions>
                <Button style={{marginRight:"20px"}} autoFocus variant='contained' color='success' onClick = {onGitPushClickHandler}>
                    Push To Git
                </Button>
            </DialogActions>
        </BootstrapDialog>

        <Button variant="outlined" onClick={handleOpen} style={{color: !theme ?  "#404040": "white", borderColor:!theme ?  "#404040": "white"}}>
            <GitHubIcon />
        </Button>
    </>
  )
}

export default PushToGit