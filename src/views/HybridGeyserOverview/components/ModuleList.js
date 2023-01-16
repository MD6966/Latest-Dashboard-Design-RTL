import { Grid, Typography } from '@mui/material'
import React from 'react'
import {RotatingLines  } from 'react-loader-spinner'
import HybirdGeyserDashboard from './HybridGeyserDashboard/HybirdGeyserDashboard'


const ModuleList = () => {
    const [loading ,setLoading] = React.useState(false)
    const geyser_hybrid ={
        length: 2,
    }
  return (
    <div>
      {
        loading ? (
            <Grid
            alignItems="center"
            container
            jutify="center"
            >
                <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
                >
            <RotatingLines
            strokeColor="blue"
             strokeWidth="5"
             animationDuration="0.75"
              width="50"
             visible={loading}/>
                </Grid>

            </Grid>
        ) : geyser_hybrid.length === 0 && !loading ? (
        <Typography>No Modules Found</Typography>

        ) : (
            <Grid
            alignItems="center"
          container
          justify="center"
          >
            <Grid
            item
            lg={11}
            md={11}
            sm={11}
            xl={11}
            >
                   <HybirdGeyserDashboard />  
            </Grid>

            </Grid>
        )
      }
    </div>
  )
}

export default ModuleList
