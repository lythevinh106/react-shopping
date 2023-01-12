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
    width: 800,
    bgcolor: '#fff',
    borderRadius: "20px",
    boxShadow: 24,
    outline: "none",
    p: 4,


};


function ModalWrapper({ open, onClose, component = <></> }) {

    return (
        <div>

            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    {component}
                </Box>
            </Modal>
        </div>
    );
}

export default ModalWrapper;