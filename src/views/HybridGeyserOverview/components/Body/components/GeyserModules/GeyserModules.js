import React from 'react'
import GeyserModuleStatus from './components/GeyserModuleStatus'
import { Divider, Grid, Box, Typography, Button, styled, TextField } from '@mui/material'
import Page from '../../../../../../components/page/Page'
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Paginate from '../../../../../../components/Paginate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const CenteredBox = styled(Box)(({theme})=> ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}))

const GeyserModules = () => {
  const navigate = useNavigate()
  const geyserhybrid = useSelector((state)=> state.geyserhybrid.geyser)
  console.log(geyserhybrid)
  const [rowsPerPage] = React.useState(9);
  const handlePageChange = (data) => {
    setOffset(data.selected * rowsPerPage);
    setPage(data.selected);
  };
  const [offset, setOffset] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [state, setState] = React.useState({
    searchValue: '',
    list: []
})

const handleChange = (e) => {
  const results = geyserhybrid.filter(val => {
      if (e.target.value === "") return geyserhybrid
      return val.name.toLowerCase().includes(e.target.value.toLowerCase())
  })
  setState({
      searchValue: e.target.value,
      list: results
  })
  
}

React.useEffect(() => {
  setState({
      list: geyserhybrid
  })
},[])

  return (
    <Page
    title ="Geyser Modules"
    >
       <Box sx={{p:'2rem 5rem'}}>
          <TextField fullWidth variant='standard' label="Search Module Here" 
          name={state.searchValue}
          value={state.searchValue}
          onChange={handleChange}
          />
        </Box>
       <CenteredBox>
            <CenteredBox sx={{ml:'2rem'}}>
            <CircleIcon sx={{fontSize:'15px', color:'green'}} /> 
                <Typography sx={{ml:'0.5rem'}}> Hardware Connected</Typography>
            </CenteredBox>
            <CenteredBox sx={{ml:'2rem'}}>
            <CircleIcon sx={{fontSize:'15px', color:'red'}} /> 
                <Typography sx={{ml:'0.5rem'}}> Hardware Not Connected</Typography>
            </CenteredBox>
          
        
          </CenteredBox>
          <Divider sx={{m: '10px 0'}} /> 
      <Grid container spacing={2}>
        {
          !state.list.length ? <Typography sx={{mt:'1rem', ml:'1rem'}} variant='h3'> No Results Found ! </Typography>: 
            state.list.slice(offset, offset + rowsPerPage).map((val)=> {
              // console.log(val)
                return(
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                         <GeyserModuleStatus data = {val} /> 
                </Grid>
                )
            })
        }
       
       
      </Grid>
     
      <CenteredBox sx={{mt:'2rem'}}>
      <Paginate 
      onPageChange={handlePageChange}
      pageCount={Math.ceil(geyserhybrid.length / rowsPerPage)}
      />
      </CenteredBox>

      <CenteredBox>
      <Button variant='contained' sx={{mt:'2rem',}}
      startIcon={<ArrowBackIcon />}  
      onClick={()=> navigate('/dashboard/geyser_hybrid', {replace:true})}
      > Go back </Button>
      </CenteredBox>
    </Page>
  )
}

export default GeyserModules
