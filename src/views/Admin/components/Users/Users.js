import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Page from '../../../../components/page/Page'
import {getAllUsers} from '../../../../store/actions/usersActions'
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from 'react-redux';

const columns = ["User ID", "Name", "Email", "See Dashboards", "Add Dashboard", "Registered Modules"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", <Button variant='outlined'> See Dashboards</Button>, <Button variant='outlined'> Add Dashboards</Button>,<Button variant='outlined'> See Modules</Button>,],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
 ["James Houston", "Test Corp", "Dallas", "TX"],


];

const options = {
  filterType: 'checkbox',
};

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector((state)=> state.users.users)
  console.log(users)
  React.useEffect(()=> {
    dispatch(getAllUsers())
  },[])
  return (
    <Page
    title="Users"
    >
      <Box sx={{minHeight:'100vh'}}>
        <Typography variant='h4' gutterBottom>
          User List 
        </Typography>
        <MUIDataTable
            title={"All Registered Users"}
            data={data}
            columns={columns}
            options={options}
/>
      </Box>
    </Page>
  )
}

export default Users
