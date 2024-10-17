import {Box, Typography} from "@mui/material"
import {useState,useEffect} from 'react'
import {DataGrid} from '@mui/x-data-grid'
import { retrieveProfiles } from '../api/profiles'

// {field: '', headerName: '' [, any css]}
const columns = [
    {
        field: 'id', // backend
        headerName: 'Profile ID',  // output
        width: 150,
        fontWeight: 'bold'
    },
    {
        field: 'nickname',
        headerName: 'Nickname',
        width: 200
    },
    {
        field: 'full_name',
        headerName: "Full Name",
        width: 200
    },
    {
        field: 'bio',
        headerName: "About Me",
        flex: 1
    },
    {
        field: 'action',
        headerName: 'Actions',
        flex: 1
    }
]

function Profiles(){
    const [rows,setRows] = useState([])

    useEffect(()=>{
        retrieveProfiles()
        .then(res=>{
            setRows(res.data)
        })
    },[])

    return (
        <Box sx={{flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: 2}}>
            <Box m={2}>
                <Typography variant="h2" textAlign='center'>
                    Profile management
                </Typography>
            </Box>
            <Box sx={{flex: 1, p: 8}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination:{
                            paginationModel:{
                                pageSize: 10
                            }
                        }
                    }}
                    pageSizeOptions={[10, 20, 30, 50, 100]}
                    disableRowSelectionOnClick
                    disableColumnResize
                    disableAutosize
                />
            </Box>
        </Box>
    )
}

export default Profiles