import Lottie from 'lottie-react'
import React from 'react'
import BlueStudent1 from '../../../../public/Photos/Animation - 1714147521435.json'
import BlueStudent2 from '../../../../public/Photos/Animation - 1714114756194.json'
import YellowStudent from '../../../../public/Photos/Animation - 1714114686415.json'
import FemaleStudent from '../../../../public/Photos/Animation - 1714117874892.json'

const color = '0068FF FADB39 575BB5'

const CustomCard = () => {
  return (
    <div className='w-1/2 grid grid-cols-2 gap-4 '>
      <div className='h-32 flex justify-end max-w-80 drop-shadow-2xl bg-[#0068FF]  rounded-md'>
        <div className='flex'>
        <div className='relative top-8 left-8'>
        <h3 className='text-2xl text-[#FCFCFC]'>Dive</h3>
        <p className='text-white text-sm mt-2'>into discovery with more organized study habits</p>
        </div>
        <Lottie className='h-48 w-48 -top-20  relative' animationData={YellowStudent}></Lottie>
        </div>
      </div>
      <div className='h-32 flex justify-end max-w-80 drop-shadow-2xl bg-[#FADB39]  rounded-md'>
        <div className='flex'>
        <div className='relative top-8 left-8'>
        <h3 className='text-2xl text-[#FCFCFC]'>Helps</h3>
        <p className='text-white text-sm mt-2'>you to focus in more scientific way</p>
        </div>
        <Lottie className='h-48 w-48 -top-20  relative' animationData={BlueStudent1}></Lottie>
        </div>
      </div>
      <div className='h-32 flex justify-end max-w-80 drop-shadow-2xl bg-[#ED7071]  rounded-md'>
        <div className='flex'>
        <div className='relative top-8 left-8'>
        <h3 className='text-2xl text-[#FCFCFC]'>Explore</h3>
        <p className='text-white text-sm mt-2'>more besides your academic study</p>
        </div>
        <Lottie className='h-48 w-48 -top-20  relative' animationData={BlueStudent2}></Lottie>
        </div>
      </div>
      
      <div className='h-32 flex justify-end max-w-80 drop-shadow-2xl bg-[#575BB5]  rounded-md'>
        <div className='flex'>
        <div className='relative top-8 left-20'>
        <h3 className='text-2xl text-[#FCFCFC]'>Organize</h3>
        <p className='text-white text-sm mt-2'>your daily classes in a more efficient way.</p>
        </div>
        <Lottie className='h-56 w-56 -top-24 left-8  relative' animationData={FemaleStudent}></Lottie>
        </div>
      </div>
    </div>
  )
}

export default CustomCard