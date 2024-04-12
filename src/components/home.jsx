import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [employeData, setEmployeData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                console.log(response.data);
                setEmployeData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])


    return (
        <Box component="main" sx={{ p: 12, textAlign: 'center' }}>
            {
                employeData.map((employe) => (
                    <Paper elevation={8}>
                        <Box sx={{ m: 3 }}>
                            <Typography variant='h5' sx={{ m: 3, fontSize: 30 }}>ID:{employe.id}</Typography>
                            <Typography sx={{ m: 3 }}>Name:{employe.name}</Typography>
                            <Typography sx={{ m: 3 }}>Email:{employe.email}</Typography>
                        </Box>

                    </Paper>
                ))
            }
        </Box>
    )
}
