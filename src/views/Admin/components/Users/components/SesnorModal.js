import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import DashboardSelect2 from './DashboardSelect2'

const SesnorModal = (props) => {
    const [open, setOpen] = React.useState(false);
  const { id } = props;
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
    <Button
      color="secondary"
      onClick={handleClickOpen}
      variant="outlined"
    >
      See Modules
    </Button>
    <Dialog
      aria-describedby="alert-dialog-description"
      aria-labelledby="alert-dialog-title"
      fullWidth
      onClose={handleClose}
      open={open}
    >
      <DialogTitle id="alert-dialog-title">Modules</DialogTitle>
      <DialogContent>
        <DashboardSelect2
          close={handleClose}
          id={id}
        />
      </DialogContent>
    </Dialog>
  </div>
  )
}

export default SesnorModal
