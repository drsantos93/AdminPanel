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

function MainLayout(){

}

export default MainLayout