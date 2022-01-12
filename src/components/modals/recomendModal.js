import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import './recomendModal.scss';
import { DialogContent, DialogContentText } from '@mui/material';

const RecomendModal = ({modalCloseHandler}) => {

    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        modalCloseHandler(false);
        localStorage.setItem('Bar', true);
    };

    return (
        <div className='modal-window'>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle sx={{backgroundColor: '#679FB2', fontFamily: 'Montserrat', fontSize: '24px'}} id="alert-dialog-title">
                    {"NEW APP!"}
                </DialogTitle>
                <DialogContent sx={{backgroundColor: '#679FB2'}}>
                    <DialogContentText sx={{fontSize: '18px', fontFamily: 'Montserrat', color: 'black'}} id="alert-dialog-description">
                        I've released new todo list. Wanna test it? Click the "OK" button below.
                        Or check it later on my GitHub.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{paddingRight: '20px', backgroundColor: '#679FB2'}}>
                    <Button className='btn-ok' sx={{color: 'black', fontFamily: 'Montserrat', fontSize: '18px'}} onClick={handleClose}>
                        <a className="ref-link" href='https://nwtodo.netlify.app' target="noreferrer">OK</a>
                    </Button>
                    <Button className='btn-later' sx={{color: 'black', fontFamily: 'Montserrat', fontSize: '18px'}} onClick={handleClose} autoFocus>
                        <span className='btn-later-text'>Later</span>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default React.memo(RecomendModal);