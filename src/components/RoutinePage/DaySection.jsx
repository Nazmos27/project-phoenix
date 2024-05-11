import Button from '@mui/material/Button';
import React from 'react'

const DaySection = () => {
  return (
    <div className='flex justify-between w-full'>
        <Button color='primary' variant='outlined'>Saturday</Button>
        <Button color='primary' variant='contained'>Sunday</Button>
        <Button color='primary' variant='outlined'>Monday</Button>
    </div>
  )
}

export default DaySection