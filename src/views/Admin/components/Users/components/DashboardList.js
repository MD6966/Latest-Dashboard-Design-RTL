import React from 'react'
import { Button,Dialog, DialogActions, DialogContent,
DialogTitle, List, ListItem, ListItemText, IconButton,
Grid, Typography,
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import { Block } from '@mui/icons-material'
import { Restore } from '@mui/icons-material'
import { useSnackbar } from 'notistack';
import axios from 'axios'
import { makeConfig } from '../../../../../store/actions/authActions'
import { useState } from 'react'
const DashboardList = (props) => {
    const [open, setOpen] = React.useState(false);
    const { id } = props;
    const [dashboardList, setDashboardList] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    const handleClickOpen = async () => {
        setOpen(true);
        const config = await makeConfig('application/json');
        const body = { id };
        const res = await axios.post(`${process.env.REACT_APP_URL}admin/users/seeDashboards`,
          body,
          config
        );
        setDashboardList(res.data);
        
      };
      const handleClose = () => {
        setOpen(false);
      };
      const handleDelete = async (title) => {
        const arr = dashboardList.filter((d) => d.title !== title);
        const config = await makeConfig('application/json');
        const body = {
          dashboards: arr,
          id
        };
        const data = await axios.post(
          `${process.env.REACT_APP_URL}admin/removeDashboard`,
          body,
          config
        );
        setDashboardList(arr);
        if (data.data === 'done') {
          enqueueSnackbar('Dashboard Deleted', {
            variant: 'success'
          });
        }
      };

      const handleBlock = async (title) => {
        const config = await makeConfig('application/json');
        const body = {
          dashboard: title,
          id,
          block: true
        };
        const data = await axios.post(
          `${process.env.REACT_APP_URL}admin/blockUnblockDashboard`,
          body,
          config
        );
        setDashboardList((dashboard) => {
          const list = dashboard.map((d) => {
            if (d.title === title) {
              return {
                ...d,
                isBlocked: true
              };
            } else {
              return d;
            }
          });
    
          return list;
        });
    
        if (data.data === 'done') {
          enqueueSnackbar('Dashboard Blocked', {
            variant: 'success'
          });
        }
      };
      const handleUnblock = async (title) => {
        const config = await makeConfig('application/json');
        const body = {
          dashboard: title,
          id,
          block: false
        };
        const data = await axios.post(
          `${process.env.REACT_APP_URL}admin/blockUnblockDashboard`,
          body,
          config
        );
        setDashboardList((dashboard) => {
          const list = dashboard.map((d) => {
            if (d.title === title) {
              return {
                ...d,
                isBlocked: false
              };
            } else {
              return d;
            }
          });
    
          return list;
        });
        if (data.data === 'done') {
          enqueueSnackbar('Dashboard Unblocked', {
            variant: 'success'
          });
        }
      };
  return (
    <div>
      <Button
        color="secondary"
        onClick={handleClickOpen}
        variant="outlined"
      >
        See Dashboards
      </Button>
      <Dialog
        aria-labelledby="form-dialog-title"
        fullWidth
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="form-dialog-title">Dashboards</DialogTitle>
        <DialogContent>
          {dashboardList.length !== 0 ? (
            <List dense>
              {dashboardList.map((d) => {
                if (d !== null) {
                  return (
                    <Grid
                      container
                      key={d.title}
                    >
                      <Grid
                        item
                        lg={8}
                        md={8}
                        sm={8}
                        xl={8}
                      >
                        <ListItem key={d.title}>
                          <ListItemText primary={d.title} />
                        </ListItem>
                      </Grid>
                      <Grid
                        item
                        lg={2}
                        md={2}
                        sm={2}
                        xl={2}
                      >
                        <IconButton
                          aria-label="delete"
                          key={d.title}
                          onClick={() => handleDelete(d.title)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Grid>
                      <Grid
                        item
                        lg={2}
                        md={2}
                        sm={2}
                        xl={2}
                      >
                        {d.isBlocked ? (
                          <IconButton
                            aria-label="delete"
                            key={d.title}
                            onClick={() => handleUnblock(d.title)}
                          >
                            <Restore
                             fontSize="small" />
                          </IconButton>
                        ) : (
                          <IconButton
                            aria-label="delete"
                            key={d.title}
                            onClick={() => handleBlock(d.title)}
                          >
                            <Block fontSize="small" />
                          </IconButton>
                        )}
                      </Grid>
                    </Grid>
                  );
                } else {
                  return <Typography variant="h5">No Dashboards founds </Typography>
                }
              })}
            </List>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            onClick={handleClose}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DashboardList
