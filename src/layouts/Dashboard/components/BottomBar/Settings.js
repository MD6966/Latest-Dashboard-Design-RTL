import React, { useState, useRef } from 'react';
import { Badge, IconButton, SvgIcon,Tooltip } from '@mui/material';

const Settings = () => {
  return (
    <>
    <Tooltip title="Settings">
        <Badge
        color="secondary"
        variant='dot'>
            <IconButton>
                <SvgIcon>
                    Test 
                </SvgIcon>
            </IconButton>
        </Badge>
    </Tooltip>
      
    </>
  )
}

export default Settings
