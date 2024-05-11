import * as React from 'react';
import Button from '@mui/material/Button';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Home from './components/common-components/Home';
import './App.css'
import NavBar from './components/common-components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/common-components/Footer';

export default function App() {
  return(
    <>
     <NavBar></NavBar>
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  );
}
