import { Box, Button } from '@mui/material'
import React from 'react'
import {Delete,Edit} from '@mui/icons-material'

export default function MaterialUI() {
  return (
    <div>
        <button>Base UI button</button>
        <Button>Material UI</Button>

    <Box sx={{'& button' : {m:1}}}>
    <Button variant='text'>text button</Button>
    <Button variant='outlined'>Outlined Button</Button>
    <Button variant='contained'>COntained button</Button>
    </Box>

    <Box sx={{'& button' : {m:1}}}>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>


    </Box>

    <Box sx={{'& button' : {m:1}}}>
    <Button variant='contained' size='small' startIcon={<Edit/>}>Edit</Button>
    <Button variant='contained' size='small' endIcon={<Delete/>}>Delete</Button>

    </Box>
    </div>
  )
}
