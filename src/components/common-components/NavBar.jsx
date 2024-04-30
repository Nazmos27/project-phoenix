
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React from 'react'
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';






const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
  
}));

const ResponsiveStyledBadge = styled(StyledBadge)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    // Adjust styles for smaller screens here
    '& .MuiBadge-badge': {
      // Example adjustment
      width: '20px',
      height: '20px',
      borderRadius:'50%',
      position: 'absolute',
      bottom: 20,
      right: 16,
    },
  },
}));


const NavBar = () => {
  return (
    <div className='64'>
      <div className='flex md:justify-between justify-around  px-7 items-center my-10'>
        {/* <div className="bg-cover bg-center md:h-16 md:w-60 h-10 w-40" style={{ backgroundImage: `url("public/Photos/Untitled_design-removebg-preview.svg")`}}></div> */}
        <img src="public/Photos/Untitled_design-removebg-preview.svg" className='md:h-16 md:w-60 h-64 ml-64 w-96' alt="" />
        <ul className='md:flex justify-between items-center md:pr-40 hidden'>
          <li className='h-10 w-20 hover:bg-slate-400 bg-slate-50 rounded-md mx-2 p-2 text-center'><Link  to="/">Home</Link></li>
          <li className='h-10 w-20 hover:bg-slate-400 bg-slate-50 rounded-md mx-2 p-2 text-center'><Link  to="/routine">Routine</Link></li>
          <li className='h-10 w-20 hover:bg-slate-400 bg-slate-50 rounded-md mx-2 p-2 text-center'><Link  to="/notice">Notice</Link></li>

        </ul>

        
        <ResponsiveStyledBadge
          
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar sx={{
            height:'100px',
            width:'100px',
            '@media (min-width:600px)': {
              height:'80px',
              width: '80px',
              
            },
          }} alt="Nazmos Sakib" src="public/Photos/Opera Snapshot_2024-04-25_130053_www.facebook.com.png" />
        </ResponsiveStyledBadge>
      </div>
    </div>
  )
}

export default NavBar

