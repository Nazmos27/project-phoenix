import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './components/common-components/Home.jsx';
import RoutinePage from './components/RoutinePage/RoutinePage.jsx';
import NoticePage from './components/NoticePage/NoticePage.jsx';
import WelcomePage from './components/WelcomePage/WelcomePage.jsx';
import { StyledEngineProvider } from '@mui/material';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <WelcomePage></WelcomePage>
      },
      {
        path: "/routine",
        element: <RoutinePage></RoutinePage>
      },
      {
        path: "notice",
        element: <NoticePage></NoticePage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>,
)
