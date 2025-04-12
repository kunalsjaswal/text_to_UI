import React from 'react'
import { styled as st} from '@mui/material/styles';
import { Dialog, DialogTitle, IconButton, DialogContent, DialogActions, TextField, Button, FormLabel, TextareaAutosize} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const BootstrapDialog = st(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
const CreateProject = ({handleClose, open, handleUploadProject, projectName, setProjectName, projectDescription, setProjectDescription}) => {
  return (
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
    >
        <DialogTitle sx={{ m: 0, p: 2}} id="customized-dialog-title">
            <b>Create New Project</b>
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
            <TextField id="outlined-basic" fullWidth placeholder="Project Name" value={projectName} onChange={(ev) => setProjectName(ev.target.value)} variant="outlined" />
            <TextField id="outlined-basic" fullWidth placeholder="Project Description" value={projectDescription} onChange={(ev) => setProjectDescription(ev.target.value)} variant="outlined" />

        </DialogContent>
        <DialogActions>
            <Button style={{marginRight:"20px"}} autoFocus variant='contained' color='warning' onClick={handleUploadProject}>
                Create
            </Button>
        </DialogActions>
    </BootstrapDialog>

  )
}

export default CreateProject