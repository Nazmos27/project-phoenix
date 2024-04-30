import React from 'react'
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';import { Stack } from '@mui/material';




const Footer = () => {
  return (
    <div className='flex-col justify-center items-center bg-slate-200 py-10'>
      <div className='h-20 w-full flex justify-center items-center '>
        <img src="public/Photos/Untitled_design-removebg-preview.svg" className='max-h-40' alt="" />
      </div>
      <Divider variant="middle"  />
      <div className='flex justify-center py-4'>
      <Stack direction="row" spacing={1}>
      <img className='h-8 w-8' src="public/Photos/icons8-facebook-94.png" alt="" />
      <img className='h-8 w-8' src="public/Photos/icons8-twitter-circled-94.png" alt="" />
      <img className='h-8 w-8' src="public/Photos/icons8-instagram-94.png" alt="" />
      <img className='h-8 w-8' src="public/Photos/icons8-email-94.png" alt="" />
      <img className='h-8 w-8' src="public/Photos/icons8-call-94.png" alt="" />
    </Stack>
      </div>
      <p className='text-center italic text-xs'>2024 - All right reserved to Md. Nazmos Sakib</p>
    </div>
  )
}

export default Footer