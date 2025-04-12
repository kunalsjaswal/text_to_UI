import React, { useEffect } from 'react'
import { styled as st} from '@mui/material/styles';
import { Dialog, DialogTitle, IconButton, DialogContent, DialogActions, TextField, Button, FormLabel} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from 'styled-components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const BootstrapDialog = st(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

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

const UploadProject = ({handleClose, open, file, setFile, handleUploadProject, projectName, setProjectName, projectDescription, setProjectDescription}) => {
  useEffect(()=>{

  },[file])

  return (
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
    >
        <DialogTitle sx={{ m: 0, p: 2}} id="customized-dialog-title">
            <b>Upload Your Project</b>
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
          <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
              <FormLabel>Upload Zip file of Your Project</FormLabel>
              <Button
                component="label"
                role={undefined}
                color={file ? 'success' : 'inherit'}
                variant="outlined"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput 
                  type="file"
                  accept=".zip,.rar,.7zip"
                  onChange={(event) => setFile(event.target.files[0])}
                />
              </Button>
              {
                file && <CheckCircleOutlineIcon fontSize='large' color='success'/>
              }
          </div>

            <TextField id="outlined-basic" fullWidth placeholder="Project Name" value={projectName} onChange={(ev) => setProjectName(ev.target.value)} variant="outlined" />
            <TextField id="outlined-basic" fullWidth placeholder="Project Description" value={projectDescription} onChange={(ev) => setProjectDescription(ev.target.value)} variant="outlined" />

        </DialogContent>
        <DialogActions>
            <Button autoFocus style={{marginRight:"20px"}} variant='contained' color='warning' onClick={handleUploadProject}>
            Upload
            </Button>
        </DialogActions>
    </BootstrapDialog>

  )
}

export default UploadProject