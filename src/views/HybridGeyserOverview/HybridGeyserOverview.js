import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Page from '../../components/page/Page'
import { get_hybrid_geyser_sensor } from '../../store/actions/geyserHybridActions'
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
    const user = useSelector((state) => state.auth.user)
    const user_id = useSelector((state) => state.auth.user.id);
    const dispatch = useDispatch()
    const geyserhybrid = useSelector((state)=> state.geyserhybrid.geyser)
    // console.log(geyserhybrid)
    const [blocked, setBlocked] = React.useState(false)

    React.useEffect(()=> {
     dispatch(get_hybrid_geyser_sensor(user_id))
            
        
    }, [])

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
                <ModuleList geyserhybrid={geyserhybrid} /> 
                </>
            ) : null
        }
      
    </Page>
  )
}

export default HybridGeyserOverview
