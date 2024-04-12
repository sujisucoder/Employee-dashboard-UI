import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export default function EmployeForm() {
  return (
    <>
    <Box sx={{p:8}}>
    <Box component="form"  sx={{ '& .MuiTextField-root': { m: 2, width: '30ch' }, display:'flex', flexDirection:'column',alignItems:'center', }}>
    <Typography variant='h2' sx={{}}>Employee Form</Typography>
    <TextField label="Name" name="name"   required /> 
    <TextField label="Designation" name="designation"  required />
    <TextField label="Location" name="location"  required />
    <TextField label="Salary" name="salary" type="number"  required />
    <Button type="submit" variant="contained">Submit</Button>
    </Box>
    </Box>
    </>
  )
}
