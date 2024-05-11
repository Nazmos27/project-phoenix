
// import { styled } from '@mui/material/styles';
// import Badge from '@mui/material/Badge';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import React from 'react'
// import { Link } from 'react-router-dom';
// import { useMediaQuery } from '@mui/material';






// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     backgroundColor: '#44b700',
//     color: '#44b700',
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     '&::after': {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       borderRadius: '50%',
//       animation: 'ripple 1.2s infinite ease-in-out',
//       border: '1px solid currentColor',
//       content: '""',
//     },
//   },
//   '@keyframes ripple': {
//     '0%': {
//       transform: 'scale(.8)',
//       opacity: 1,
//     },
//     '100%': {
//       transform: 'scale(2.4)',
//       opacity: 0,
//     },
//   },
  
// }));

// const ResponsiveStyledBadge = styled(StyledBadge)(({ theme }) => ({
//   [theme.breakpoints.down('sm')]: {
//     // Adjust styles for smaller screens here
//     '& .MuiBadge-badge': {
//       // Example adjustment
//       width: '20px',
//       height: '20px',
//       borderRadius:'50%',
//       position: 'absolute',
//       bottom: 20,
//       right: 16,
//     },
//   },
// }));


// const NavBar = () => {
//   return (
//     <div className='w-screen'>
//       <div className='flex md:justify-between justify-around  px-7 items-center my-10'>
//         {/* <div className="bg-cover bg-center md:h-16 md:w-60 h-10 w-40" style={{ backgroundImage: `url("public/Photos/Untitled_design-removebg-preview.svg")`}}></div> */}
//         <img src="public/Photos/Untitled_design-removebg-preview.svg" className='md:h-16 md:w-60 h-64 md:ml-2 ml-40 w-96' alt="" />
//         <ul className='md:flex justify-between items-center md:pr-40 hidden'>
//           <li className='h-10 w-20 hover:bg-slate-400 bg-slate-50 rounded-md mx-2 p-2 text-center'><Link  to="/">Home</Link></li>
//           <li className='h-10 w-20 hover:bg-slate-400 bg-slate-50 rounded-md mx-2 p-2 text-center'><Link  to="/routine">Routine</Link></li>
//           <li className='h-10 w-20 hover:bg-slate-400 bg-slate-50 rounded-md mx-2 p-2 text-center'><Link  to="/notice">Notice</Link></li>

//         </ul>

        
//         <ResponsiveStyledBadge
          
//           overlap="circular"
//           anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//           variant="dot"
//         >
//           <Avatar sx={{
//             height:'100px',
//             width:'100px',
//             '@media (min-width:600px)': {
//               height:'80px',
//               width: '80px',
              
//             },
//           }} alt="Nazmos Sakib" src="public/Photos/Opera Snapshot_2024-04-25_130053_www.facebook.com.png" />
//         </ResponsiveStyledBadge>
//       </div>
//     </div>
//   )
// }

// export default NavBar


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Login', 'Post', 'MyCart'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  return (
    <AppBar position="static" color='default'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          {/* <img src="public/Photos/Untitled_design-removebg-preview.svg" className='md:h-16 md:w-60 h-14 w-16' alt="" /> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/"><Typography textAlign="center" >Home</Typography></Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/login"><Typography textAlign="center">Login</Typography></Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/post"><Typography textAlign="center">Post</Typography></Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/myCart"><Typography textAlign="center">My Cart</Typography></Link>
              </MenuItem>

            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <img src="public/Photos/Untitled_design-removebg-preview.svg" className='md:h-16 md:w-60 h-14  w-40 mr-10' alt="" />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },ml:20 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                variant='contained'
                sx={{ mx: 1,my:2, color: 'white', display: 'block' }}
              >

                <Link to={page.toLowerCase()}>{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="sakib" src='' />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link to='/dashboard'>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
              </Link>

              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">bal</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">chal</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

