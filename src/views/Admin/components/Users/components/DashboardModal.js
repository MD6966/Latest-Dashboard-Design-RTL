import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle,  } from '@mui/material'
import DashboardSelect from './DashboardSelect'

const DashboardModal = (props) => {
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
        Add Dashboard
      </Button>
      <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        fullWidth
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="alert-dialog-title">Add Dashboard</DialogTitle>
        <DialogContent>
          <DashboardSelect
            close={handleClose}
            id={id}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DashboardModal
