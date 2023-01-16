import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Page from '../../components/page/Page'
import ModuleList from './components/ModuleList'
const useStyles = makeStyles((theme)=> ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        // width:'700px'
    }
}))
const HybridGeyserOverview = () => {
    const classes = useStyles()
    const [blocked, setBlocked] = React.useState(false)

  return (
    <Page title="Smart Hybird Geyser System">
        {
            blocked ? (
                <>
                <img 
                alt='Blocked'
                src='/assets/images/blocked.webp'
                className={classes.root}
                />
                <Box>
                <Typography variant="h3">
              This dashboard has been blocked by admin. Please contact support
              to unblock your dashboard.
            </Typography>
                </Box>
                </>
                
            ) : !blocked ? (
                <>
                <ModuleList /> 
                </>
            ) : null
        }
      
    </Page>
  )
}

export default HybridGeyserOverview
