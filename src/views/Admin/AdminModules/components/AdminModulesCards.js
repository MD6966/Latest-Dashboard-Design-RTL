import { ArrowRightAlt } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, styled, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CenteredBox = styled(Box)(({theme})=> ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 5
}))

const AdminModulesCards = (props) => {
    const {title , to , image} = props
  return (
    <Card
    elevation={4}
    >
      <CardMedia 
      sx={{ height: 150 }}
      image={`/assets/images/${image}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" sx={{textAlign:'center'}}>
            {title}
        </Typography>
      </CardContent>
    
        <CenteredBox>
        <Button endIcon={<ArrowRightAlt />} variant='contained' sx={{background:'#264252'}}
        component={Link}
        to={`/admin-dashboard/${to}`}
        > Open  </Button>
        </CenteredBox>
    </Card>
  )
}

export default AdminModulesCards
