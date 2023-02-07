import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ChartData from './Chart'


const LogsAndGraphs = () => {

  return (
    <>
    <Grid container spacing={2} alignItems="center" justifyContent="space-between">
      <Grid item>
                <Typography variant="h5">Logs & Graphs</Typography>
            </Grid>
            <Grid item>
                <Stack direction="row" alignItems="center" spacing={0}>
                <Button size="small" >
                                Month
                            </Button>
                            <Button
                                size="small">
                                Week
                            </Button>
                </Stack>

            </Grid>
    </Grid>
    <ChartData  /> 
    </>
  )
}

export default LogsAndGraphs
