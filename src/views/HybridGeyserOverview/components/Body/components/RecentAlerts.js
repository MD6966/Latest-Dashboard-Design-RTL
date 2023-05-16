import React from 'react'
import RecentAlertsCard from './RecentAlertsCard'
import { Box, Card, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getHybridGeyserAlerts } from '../../../../../store/actions/geyserHybridActions'

const RecentAlerts = () => {
  const data = [
    {id:1 ,alert:'This is geyser hybrid alert', at: 'Monday 9:00 am' },
    {id:2 ,alert:'This is geyser hybrid alert', at: 'Monday 9:00 am' },
    {id:3 ,alert:'This is geyser hybrid alert', at: 'Monday 9:00 am' },
    {id:4 ,alert:'This is geyser hybrid alert', at: 'Monday 9:00 am' },
    {id:5 ,alert:'This is geyser hybrid alert', at: 'Monday 9:00 am' },
    {id:6 ,alert:'This is geyser hybrid alert', at: 'Monday 9:00 am' },
    {id:7 ,alert:'This is geyser hybrid alert', at: 'Monday 9:00 am' },
    {id:8 ,alert:'This is geyser hybrid alert', at: 'Monday 9:00 am' },

  ]
  const dispatch = useDispatch()
  const id = useSelector((state)=> state.auth.user.id)
  React.useEffect(()=> {
    dispatch(getHybridGeyserAlerts(id))

  }, [])
  const alertData = useSelector((state)=> state.geyserhybrid.alertData)
  // console.log(alertData)
  return (
    <Card sx={{height:'100vh'}} elevation={5}>
        <Box sx={{height:'8vh', background:'#e2e2e2', p:1}}>
          <Typography sx={{textAlign:'center', fontWeight:'bold'}} variant='h5'>
            Recent Alerts 
          </Typography>
        </Box>
        <Box sx={{maxHeight:'92vh', p:1, overflowY:'scroll'}}>

        {
          data.map((val)=> {
            console.log(val, 'Thissssss')
            return(
              <RecentAlertsCard alert={val.alert} at={val.at} key={val.id} /> 
              )
            })
          }
          </Box>
        
    </Card>
  )
}

export default RecentAlerts
