import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function CustomBackdrop({ open, onClose }) {
  return (
    <Backdrop
    //   sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
    //   open={open}
    //   onClick={onClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}