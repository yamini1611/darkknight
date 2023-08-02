import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import '../../components/styles/Investigation.css';
import BatModal from '../Modal/Modal';
import { useState } from 'react';



const images = [
  {
    url: 'https://images4.alphacoders.com/968/96814.jpg',
    title: 'Investigate',
    width: '100%',
  },

  {
    url: 'https://www.hdnicewallpapers.com/Walls/Big/Weapons/Weapons_Pistol_and_Knife_HD_Desktop_Photos.jpg',
    title: 'Inventory',
    width: '100%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span1')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span1')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span1')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span1')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function DKCard() {
  return (
    <div className='container pb-5'> 
        
         <Box className="pb-5" sx={{ display: 'block', flexWrap: 'wrap', minWidth: 300, width: '100%'}}>
      {images.map((image) => (
        <Link to={`/${image.title}`}>
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            borderRadius:'5px'
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span1"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        </Link>
      ))}
    </Box>
    
    </div>

  );
}



export  function DkInvestigateCard(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='container p-5 col-lg-4 dk-invest-card '>
 <MDBCard background='dark' className='text-white '>
      <MDBCardImage overlay src={props.files} className='col-lg-3' alt='...' />
      <MDBCardOverlay>
        <MDBCardTitle className='mt-5 pt-5'>{props.crimeType} at {props.location}</MDBCardTitle>
       
        <MDBBtn color='dark' onClick={()=>setModalShow(true)}>
        Resolve
      </MDBBtn>
      <BatModal crimeType={props.crimeType} id={props.id} location={props.location} time={props.time} description={props.description} contact={props.contact} confidentiality={props.confidentiality} emergency={props.emergency} show={modalShow} onHide={()=>setModalShow(false)}></BatModal>
      </MDBCardOverlay>
    </MDBCard>
    </div>
  );
}