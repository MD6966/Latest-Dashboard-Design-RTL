import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SettingsInTabs from './SettingsInTabs';
import Maintenance from './Maintenance';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',  }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider', height:'17vh', mt:'5rem'}}
      >
        <Tab label="Settings" {...a11yProps(0)} />
        <Tab label="Maintenance" {...a11yProps(1)} />
      </Tabs>
      <Box sx={{width:'100%', ml:'1rem', p:2, height:'45vh', overflowY:'scroll'}}>
        {value===0 && <SettingsInTabs /> }
        {value===1 && <Maintenance />}
      </Box>
      {/* {value ===0 && <SettingsINTabs /> } */}
      {/* <TabPanel value={value} index={0}>
        <SettingsINTabs />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Maintenance
      </TabPanel> */}
    </Box>
  );
}