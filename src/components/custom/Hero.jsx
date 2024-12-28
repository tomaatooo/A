import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '@/components/ui/button'


const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-9 mx-56'>
        <h1 className='font-extrabold text-[50px] text-center mt-16'>
            <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span> Personalized Itineries at Your Fingertips
        </h1>
        <p className='text-xl  text-gray-500 text-center'>Your personalized trip planner and travel curator with the help of AI</p>
            <Link to={'/create-trip'}>
            <Button>Get Started</Button>
            </Link>
    </div>
  )
}

export default Hero