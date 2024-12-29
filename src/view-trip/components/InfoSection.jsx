import { Button } from '@/components/ui/button'
import React from 'react'
import { IoIosSend } from "react-icons/io";


const InfoSection = ({trip}) => {
  return (
    <div>
      <img src='/placeholder.jpg' className='h-[340px] w-full object-cover rounded-xl'/>
      <div className='my-5 flex flex-col gap-2'>
        <h2 className='font-bold text-2xl'>{trip.userSelection?.location}</h2>

      <div>
        <div className='flex gap-5'>
          <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm'>📅{trip.userSelection?.noOfDays} Day</h2>
          <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm'>💰{trip.userSelection?.budget} Budget</h2>
          <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm'>🥂{trip.userSelection?.traveller} People</h2>
        </div>
      </div>
      <Button><IoIosSend />
      </Button>
      </div>
    </div>
  )
}

export default InfoSection