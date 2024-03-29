import React from 'react'
import { useDispatch } from 'react-redux'
import { OutlinedInput, InputLabel, MenuItem, FormControl,
Select, Button,Box
} from '@mui/material'
import axios from 'axios'
import { makeConfig } from '../../../../../store/actions/authActions'
import { makeStyles } from '@mui/styles'
import { getAllUsers } from '../../../../../store/actions/usersActions'
import { useState } from 'react'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '100%'
    },
    label: {
      backgroundColor: theme.palette.background.paper
    }
  }));

  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const DashboardSelect = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const { id } = props;
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const dashboards = [
        {
          title: 'Fuel Monitoring System',
          href: '/fuel'
        },
        {
          title: 'Smart Farm Fisheries',
          href: '/liquid'
        },
        {
          title: 'Cold Chain Monitoring System',
          href: '/coldChain'
        },
        {
          title: 'CNC Monitoring System',
          href: '/cnc'
        },
        {
          title: 'Temperature Monitoring System',
          href: '/temperature'
        },
        {
          title: 'Water Quality Monitoring System',
          href: '/waterQa'
        },
        {
          title: 'Fixed Asset Tracking System',
          href: '/fa'
        },
        {
          title: 'Energy Monitoring System',
          href: '/em'
        },
        {
          title: 'Water Tank System',
          href: '/tank'
        },
        {
          title: 'Environment Monitoring System',
          href: '/env'
        },
        {
          title: 'Humidity & Temperature Monitoring System',
          href: '/ht'
        },
        {
          title: 'Security System',
          href: '/security'
        },
        {
          title: 'Rectifier & Backup Battery Monitoring System',
          href: '/rectifier'
        },
        {
          title: 'Tubewell Monitoring System',
          href: '/tubewell'
        },
        {
          title: 'Smart Highway Lighting System',
          href: '/light'
        },
        {
          title: 'Smart Geyser System',
          href: '/geyser'
        }
      ];
    
      const handleChange = (event) => {
        setValue(event.target.value);
      };
    
      const handleSubmit = async () => {
        const index = dashboards.findIndex((d) => d.title === value);
        const config = await makeConfig('application/json');
        const body = {
          id,
          dashboard: dashboards[index]
        };
      
    
        const data = await axios.post(
          `${process.env.REACT_APP_URL}admin/users/addDashboard`,
          body,
          config
        );
        enqueueSnackbar(data.data.message, {
          variant: data.data.variant
        });
    
        dispatch(getAllUsers());
      };
  return (
    <div>
      <FormControl
        className={classes.formControl}
        variant="outlined"
      >
        <InputLabel
          className={classes.label}
          id="demo-mutiple-chip-label"
        >
          Add Dashboard
        </InputLabel>
        <Select
          id="demo-mutiple-chip"
          input={<OutlinedInput
            fullWidth
            id="select-multiple-chip"
          />}
          labelId="demo-mutiple-chip-label"
          MenuProps={MenuProps}
          onChange={handleChange}
          value={value}
        >
          {dashboards.map((d) => (
            <MenuItem
              key={d.title}
              value={d.title}
            >
              {d.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box
        display="flex"
        justifyContent="center"
      >
        <Button
          color="secondary"
          onClick={handleSubmit}
          variant="outlined"
        >
          Add Dashboard
        </Button>
      </Box>
    </div>
  )
}

export default DashboardSelect
