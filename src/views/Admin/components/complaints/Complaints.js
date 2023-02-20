import { Box, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import Page from '../../../../components/page/Page'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import MUIDataTable from "mui-datatables";

const columns = ["Name", "Complaint", "Date", "Status",];

const data = [
 ["Joe James", <Button variant='outlined'> See Complaint</Button>, "Date" , <Button variant='outlined'> Add Dashboards</Button>],
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

const Complaints = () => {
  const [from, setfrom] = React.useState(dayjs().subtract(1, 'week'));
  const [to, setTo] = React.useState(dayjs());

  return (
    <Page title="Complaints">
      <Box sx={{minHeight:'100vh'}}>
        <Typography variant='h4' gutterBottom sx={{mb:'2rem'}}> Complaints: </Typography>

         <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        renderInput={(props) => <TextField {...props} />}
        label="From"
        value={from}
        onChange={(newValue) => {
          setfrom(newValue);
        }}
      />
    </LocalizationProvider>
        
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        renderInput={(props) => <TextField {...props} />}
        label="To"
        value={to}
        onChange={(newValue) => {
          setTo(newValue);
        }}
      />
    </LocalizationProvider>

    <Box sx={{mt:'2rem'}}>
    <MUIDataTable
            title={"Complaints"}
            data={data}
            columns={columns}
            options={options}
/>
            </Box>
        </Box> 
    </Page>
  )
}

export default Complaints
