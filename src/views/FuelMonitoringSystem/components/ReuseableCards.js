import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

const StyledIcon = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(5),
    height: theme.spacing(5),
    justifyContent: 'center',
    marginBottom: theme.spacing(1),
  }));

const ReuseableCards = (props) => {
    const {title, Icon, status, color='primary', sx, ...other} = props
    return (
    <Card
    sx={{
        py:1,
        boxShadow:0,
        textAlign:'center',
        color: (theme)=> theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        border:'1px solid #d3d3d3',
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
        <Typography variant="h4">{status}</Typography>
        <Typography sx={{ opacity: 0.72 }}>
        {title}
      </Typography>

    </Card>
  )
}

export default ReuseableCards
