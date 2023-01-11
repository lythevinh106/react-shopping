import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import PopperWrapper from '../PopperWapper/PopperWrapper';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function ModalWrapper({ open }) {

    // const handleOpen = () => setOpen(true);


    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        setOpenModal(open);
    }, [open])

    const handleClose = () => { console.log("close") };


    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <PopperWrapper>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>

                </Box>
            </PopperWrapper>

        </Modal>
    );
}

export default ModalWrapper;