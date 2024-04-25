
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React from 'react'
import { Link } from 'react-router-dom';


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


const NavBar = () => {
  return (
    <div>
      <div className='flex justify-between px-7 items-center my-10'>
        <div className="bg-cover bg-center h-16 w-60" style={{ backgroundImage: `url("../../../public/Photos/Untitled_design-removebg-preview.svg")`}}></div>
        <ul className='flex justify-between items-center pr-40'>
          <li className='h-10 w-20 hover:bg-slate-400 bg-slate-50 rounded-md mx-2 p-2 text-center'><Link  to="/">Home</Link></li>
          <li className='h-10 w-20 hover:bg-slate-400 bg-slate-50 rounded-md mx-2 p-2 text-center'><Link  to="/routine">Routine</Link></li>
          <li className='h-10 w-20 hover:bg-slate-400 bg-slate-50 rounded-md mx-2 p-2 text-center'><Link  to="/notice">Notice</Link></li>

        </ul>

        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="Nazmos Sakib" src="../../../public/Photos/Opera Snapshot_2024-04-25_130053_www.facebook.com.png" />
        </StyledBadge>
      </div>
    </div>
  )
}

export default NavBar