import React, { useState } from "react";
import { Box, Button } from "@mui/joy";
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#C8D3D5',
  border: '2px solid #000',
  borderRadius:"5px",
  boxShadow: 24,
  p: 4,
};

export default function ModalWrapper({children,title}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ background: "#C8D3D5", padding: "10px", borderRadius: "5px" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {children}
        </Box>
      </Modal>

      <Button onClick={handleOpen}>{title}</Button>
    </Box>
  );
}
