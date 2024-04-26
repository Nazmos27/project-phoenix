import Lottie from 'lottie-react'
import React from 'react'
import BlueStudent1 from '../../../../public/Photos/Animation - 1714115545983.json'
import BlueStudent2 from '../../../../public/Photos/Animation - 1714114756194.json'
import YellowStudent from '../../../../public/Photos/Animation - 1714114686415.json'
import FemaleStudent from '../../../../public/Photos/Animation - 1714117874892.json'

const color = '0068FF FADB39 575BB5'

const CustomCard = () => {
  return (
    <div>
      <div className='h-40 flex justify-end w-80 bg-[#ED7071]  border-2 border-black rounded-md'>
        <div className='flex'>
        <p>Hello World!!</p>
        <Lottie className='h-40 w-40 -top-20  relative' animationData={BlueStudent2}></Lottie>
        </div>
      </div>
    </div>
  )
}

export default CustomCard