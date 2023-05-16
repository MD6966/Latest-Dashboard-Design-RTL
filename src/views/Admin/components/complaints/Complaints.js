import { Box, Typography, TextField, Button, CircularProgress, Grid, createTheme, ButtonGroup, } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Page from '../../../../components/page/Page'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ThemeProvider } from '@mui/styles';
import dayjs from 'dayjs';
import MUIDataTable from "mui-datatables";
import axios from 'axios'
import { makeConfig } from '../../../../store/actions/authActions';
import moment from 'moment';
import { CalendarToday } from '@mui/icons-material';
import { ComplaintModal, StatusSelect } from './components';
import {makeStyles} from '@mui/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  label: {
    backgroundColor: theme.palette.background.paper
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
  },
  heading: {
    marginBottom: theme.spacing()
  }
}));

// const columns = ["Name", "Complaint", "Date", "Status",];

// const data = [
//  ["Joe James", <Button variant='outlined'> See Complaint</Button>, "Date" , <Button variant='outlined'> Add Dashboards</Button>],
//  ["John Walsh", "Test Corp", "Hartford", "CT"],
//  ["Bob Herm", "Test Corp", "Tampa", "FL"],
//  ["James Houston", "Test Corp", "Dallas", "TX"],
//  ["James Houston", "Test Corp", "Dallas", "TX"],
//  ["James Houston", "Test Corp", "Dallas", "TX"],
//  ["James Houston", "Test Corp", "Dallas", "TX"],
//  ["James Houston", "Test Corp", "Dallas", "TX"],
//  ["James Houston", "Test Corp", "Dallas", "TX"],
//  ["James Houston", "Test Corp", "Dallas", "TX"],
//  ["James Houston", "Test Corp", "Dallas", "TX"],
//  ["James Houston", "Test Corp", "Dallas", "TX"],
//  ["James Houston", "Test Corp", "Dallas", "TX"],


// ];
// const options = {
//   filterType: 'checkbox',
// };

const Complaints = () => {
  const [from, setfrom] = React.useState(dayjs().subtract(1, 'week'));
  const [to, setTo] = React.useState(dayjs());
  const classes = useStyles();
  const [startDate, setStartDate] = useState(moment().subtract(7, 'days'));
  const [endDate, setEndDate] = useState(moment());
  const [selectEdge, setSelectEdge] = useState(null);
  const [calendarDate, setCalendarDate] = useState(moment());
  const [isLoading, setLoading] = useState(true);
  const [table, setTable] = useState([]);
  const [title, setTitle] = useState('Complaints');
  const columns = [
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'complaint',
      label: 'Complaint',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <ComplaintModal complaint={value} />
        )
      }
    },
    {
      name: 'created_at',
      label: 'Date'
    },
    {
      name: 'status',
      label: 'Status',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <StatusSelect data={value} />
        )
      }
    }
  ];

  const handleCalendarOpen = (edge) => {
    setSelectEdge(edge);
  };

  const handleCalendarChange = (date) => {
    setCalendarDate(date);
  };

  const handleCalendarClose = () => {
    setCalendarDate(moment());
    setSelectEdge(null);
  };

  const handleCalendarAccept = (date) => {
    setCalendarDate(moment());

    if (selectEdge === 'start') {
      setStartDate(date);
      if (moment(date).isAfter(endDate)) {
        setEndDate(date);
      }
    } else {
      setEndDate(date);
      if (moment(date).isBefore(startDate)) {
        setStartDate(date);
      }
    }

    setSelectEdge(null);
  };

  const open = Boolean(selectEdge);

  const doFoo = async () => {
    setLoading(true);

    const config = await makeConfig('application/json');

    const body = {
      startDate,
      endDate
    };

    axios
      .post(`${process.env.REACT_APP_URL}admin/complaints`, body, config)
      .then((data) => {
        setTable(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setLoading(false);
  };

  useEffect(() => {
    doFoo();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <Page title="Complaints">
      <Box sx={{minHeight:'100vh'}}>
        <Typography variant='h4' gutterBottom sx={{mb:'2rem'}}> Complaints: </Typography>

         <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        renderInput={(props) => <TextField {...props} />}
        label="From"
        value={startDate}
        onChange={(newValue) => {
          setStartDate(newValue);
        }}
      />
    </LocalizationProvider>
        
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        renderInput={(props) => <TextField {...props} />}
        label="To"
        value={endDate}
        onChange={(newValue) => {
          setEndDate(newValue);
        }}
      />
    </LocalizationProvider>

    <Box sx={{mt:'2rem'}}>
    <MUIDataTable
            title={"Complaints"}
            data={table}
            columns={columns}
            options={options}
/>
            </Box>
        </Box> 
         {/* <Grid container>
      <Grid item lg={12} xl={12} xs={12}>
        <Typography variant="h2" className={classes.heading}>
          Complaints:
        </Typography>
      </Grid>
      <Grid item lg={12} xl={12} xs={12} md={12}>
        <ButtonGroup className={classes.results} variant="outlined">
          <Button onClick={() => handleCalendarOpen('start')}>
            <CalendarToday className={classes.calendarTodayIcon} />
            {startDate.format('DD MM YYYY')}
          </Button>
          <Button onClick={() => handleCalendarOpen('end')}>
            <CalendarToday className={classes.calendarTodayIcon} />
            {endDate.format('DD MM YYYY')}
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item lg={12} xl={12} xs={12}>
        {isLoading ? (
          <CircularProgress color="secondary" />
        ) : (
          <div className={classes.results}>
            <MUIDataTable
              columns={columns}
              data={table}
              options={options}
              title={title}
            />
          </div>
        )}
      </Grid>
      <ThemeProvider theme={materialTheme}>
        <DatePicker
          maxDate={moment()}
          onAccept={handleCalendarAccept}
          onChange={handleCalendarChange}
          onClose={handleCalendarClose}
          open={open}
          style={{ display: 'none' }} // Temporal fix to hide the input element
          value={calendarDate}
          variant="dialog"
        />
      </ThemeProvider>
    </Grid> */}
    </Page>
  )
}

export default Complaints
