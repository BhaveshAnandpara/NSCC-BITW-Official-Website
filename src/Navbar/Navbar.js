import React from 'react'
import {AppBar,Toolbar,IconButton,Typography,Stack,Button} from '@mui/material'
import Menubar from '@mui/icons-material/MenuOpen'
import {useNavigate} from 'react-router-dom'

function Navbar() {
    const Navigate = useNavigate()
    const Weather = () => Navigate('/weather')
    const News = () => Navigate('/news')
    const Stock = () => Navigate('/stock')
  return (
    <>
    <AppBar position='sticky' style={{width:"100%"}}>
      <Toolbar>
      <IconButton size='large' edge='start' color='inherit' aria-label='logo'> 
        <Menubar/>
      </IconButton>
      <Typography variant='h6' component='div' sx={{ flexGrow:2}}>
        NAVBAR
      </Typography>
      <Stack direction='row' variant='h2' spacing={2}>
        <Button style={{fontSize:"16px"}} color='inherit' onClick={Weather}>Weather</Button>
        <Button style={{fontSize:"16px"}} color='inherit' onClick={News}>News</Button>
        <Button style={{fontSize:"16px"}} color='inherit' onClick={Stock}>Stock</Button>
      </Stack>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar