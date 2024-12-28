import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SelectBudgetOptions, SelectTravelsList } from '@/constants/options'
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { toast } from 'sonner'

const CreateTrip = () => {

  const [place, setPlace] = useState()
  const [formData,setFormData]=useState([])

  const handleInputChange=(name,value)=>{
    setFormData({
      ...formData,
      [name]:value
    } )
  }

  useEffect(()=>{
    
  },[formData])


  const onGenerateTrip=()=>{
    if(formData?.noOfDays>5&&!formData?.location||!formData?.budget||!formData?.traveller){
      toast("Please fill all details")
      return;
    }
    console.log(formData)
  }
  return (
    <div className='sm:px-10 md:px-32 lg-px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel perferences</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and our trip planner will generate a cuztomized itierary based on your perferences.</p>

      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is the destination?</h2>
          <Input type='text' onChange={(v)=>{setPlace(v.target.value);
            handleInputChange('location',v.target.value)
          }} />
        </div>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is the duration?</h2>
          <Input placeholder={'Eg. 3'} type='number' onChange={(v)=>{
            handleInputChange('noOfDays',v.target.value)
          }}/>
        </div>
      </div>

      <div>
        <h2 className='text-xl my-3 font-medium mt-10'>What is your budget?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOptions.map((item, index) => (
            <div key={index} className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.budget==item.title&&'shadow-lg border-black'}`} onClick={()=>handleInputChange('budget',item.title)}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className='text-xl my-3 font-medium mt-10'>How many people?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectTravelsList.map((item, index) => (
            <div key={index} className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.traveller==item.people&&'shadow-lg border-black'}`} onClick={()=>handleInputChange('traveller',item.people)}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className='my-10 flex justify-end'>
      <Button onClick={onGenerateTrip}>Generate Trip!</Button>
      </div>
          
    </div>
  )
}

export default CreateTrip