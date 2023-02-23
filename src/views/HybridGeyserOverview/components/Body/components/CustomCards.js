import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { animated, useSpring } from '@react-spring/web'


const StyledIcon = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  }));


const CustomCards = (props) => {
    const {title, Icon, status, color='primary', sx, ...other} = props
    const fade = useSpring({
      from : {
        opacity:0
      },
      to: {
        opacity:1
      },
      config: { duration: 500 },
    })
  return (
    <Card
    sx={{
        py:2,
        boxShadow:0,
        textAlign:'center',
        color: (theme)=> theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
    }}
    {...other}
    >
        <StyledIcon
        sx={{
            color: (theme) => theme.palette[color].dark,
            backgroundImage: (theme) =>
              `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
                theme.palette[color].dark,
                0.24
              )} 100%)`,
          }}
        >
           {Icon}

        </StyledIcon>
        <animated.div style={fade}>
        <Typography variant="h3">{status}</Typography>
        </animated.div >
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>

    </Card>
  )
}

export default CustomCards
