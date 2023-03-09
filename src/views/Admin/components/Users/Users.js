import { Box, Button, Typography, Grid, CircularProgress } from '@mui/material'
import React from 'react'
import Page from '../../../../components/page/Page'
import {getAllUsers} from '../../../../store/actions/usersActions'
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { DashboardModal, SensorModal, DashboardList } from './components';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  }
}));




const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector((state)=> state.users.users)
  console.log(users, 'HIIIII')
  React.useEffect(()=> {
    dispatch(getAllUsers())
  },[])
  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'scrollMaxHeight',
    selectableRows: 'none',
    fixedHeaderOptions: {
      xAxis: false,
      yAxis: true
    }
  };
  const columns = [
    {
      name: 'id',
      label: 'User ID'
    },
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'email',
      label: 'Email'
    },
    {
      name: 'dashboards',
      label: 'See Dashboards',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <DashboardList
            dashboards={value.dashboards}
            id={value.id}
          />
        )
      }
    },
    {
      name: 'dashboard',
      label: 'Add Dashboard',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <DashboardModal id={value} />
        )
      }
    },
    {
      name: 'sensors',
      label: 'See Registered Modules',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <SensorModal id={value} />
        )
      }
    }
  ];
  const classes = useStyles()
  return (
    <Page
    title="Users"
    >
      <Grid container sx={{minHeight:'100vh'}}>
        <Grid item
        lg={12}
        xl={12}
        xs={12}>
            <Typography variant='h4' gutterBottom>
          User List 
        </Typography>
        </Grid>
        <Grid item
        lg={12}
        xl={12}
        xs={12}>
             <div className={classes.results}>
            <MUIDataTable
              columns={columns}
              data={users}
              options={options}
              title={'All Registered Users'}
            />
        </div>
        </Grid>
      </Grid>
     
    </Page>
  )
}

export default Users
