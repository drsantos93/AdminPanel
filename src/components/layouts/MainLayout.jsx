import React, {useState} from 'react'
import {Link, Outlet} from 'react-router-dom'
import {Home,AccountCircle,Menu} from '@mui/icons-material'
import {AppBar, Box, Drawer, List, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography} from '@mui/material'

const drawerWidth = 240

const pages =[
    {
        label: 'Dashboard',
        to: '/',
        icon: <Home/>
    },
    {
        label: 'Profiles',
        to: '/profiles',
        icon: <AccountCircle/>
    }
]

const DrawerForWideScreen = () => (
    <Drawer
        variant='permanent'
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {width: 240, boxSizing: 'border-box'},
            display: {xs: 'none', sm: 'none', md: 'block'},
            position: 'inherit'
        }}
    >
        <Toolbar/>
        <Box sx={{overflowY: 'auto'}}>
            <List>
                {
                   pages.map((page,index) => (
                    <ListItem key={index} disablePadding>
                        {/* null safety (?):
                            variable?.key
                            just to output nothing inside a component instead of outright making the website destroy itself (no website rendered)
                        */}
                        <Link 
                            style={{color: 'inherit',textDecoration: 'inherit', width: '100%'}}
                            to={page?.to ? page.to : '/'}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    {page?.icon ? page.icon : ''}
                                </ListItemIcon>
                                <ListItemText primary={page?.label ? page.label: ''} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                   ))
                }
            </List>
        </Box>
    </Drawer>
)

const DrawerForSmallScreen = ({open, onClose}) =>(
    <Drawer
        anchor='left'
        open={open}
        onClose={onClose}
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {width: 240, boxSizing: 'border-box'},
            display: {xs: 'block', sm: 'none', md: 'none'},
        }}
    >
        <Toolbar/>
        <Box sx={{overflowY: 'auto'}}>
            <List>
                {
                   pages.map((page,index) => (
                    <ListItem key={index} disablePadding>
                      
                        <Link 
                            style={{color: 'inherit',textDecoration: 'inherit', width: '100%'}}
                            to={page?.to ? page.to : '/'}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    {page?.icon ? page.icon : ''}
                                </ListItemIcon>
                                <ListItemText primary={page?.label ? page.label: ''} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                   ))
                }
            </List>
        </Box>
    </Drawer>
)

function MainLayout(){
    const [openDrawer, setOpenDrawer] = useState(false)
    
    const toggleDrawer = () => setOpenDrawer(!openDrawer)

    return (
        // parent
      <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        {/* children */}
        <Box sx={{flex: 1, display: 'flex'}}>
            {/* header and nav */}
            <Box>
                <AppBar sx={{zIndex: theme => theme.zIndex.drawer + 1}}>
                    <Toolbar>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={{mr: 2, display: {sm: 'block', md: 'none'}}}
                            onClick={toggleDrawer}
                        >
                            <Menu/>
                        </IconButton>
                        <Typography variant='h6' component='div'>
                            Admin Panel of IDK yet
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DrawerForWideScreen/>
                <DrawerForSmallScreen open={openDrawer} onClose={toggleDrawer} />
            </Box>
            {/* content */}
            <Box pt={8} sx={{height: '100%', width: '100%', display: 'flex', flexDirection: 'row'}}>
                <Outlet/>
            </Box>
        </Box>
      </Box>
    )
}

export default MainLayout