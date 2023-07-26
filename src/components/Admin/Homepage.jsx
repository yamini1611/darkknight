import React, { useState } from 'react';
import '../styles/HomePage.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from 'primereact/button';
import BatModal from '../Modal/Modal';

const Homepage = () => {
    const [visible, setVisible] = useState(false);

  return (
    <div className='Batman-admin-wallpaper vh-100 batfont'>

<div className='mx-auto justify-content-center text-center'>
    <h3 >Enter into the crime reports</h3>
    <Button label="Enter" icon="pi pi-external-link" onClick={() => setVisible(true)} />
    {/* <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
    <Paper className='mx-auto bg-secondary' elevation={6} />
    </Box> */}


</div>

    </div>
  )
}

export default Homepage