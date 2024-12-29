import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AI_PROMPT, SelectBudgetOptions, SelectTravelsList } from '@/constants/options'
import { chatSession } from '@/service/AiModel'
import { db } from '@/service/FirebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useNavigate, useNavigation } from 'react-router-dom'
import { toast } from 'sonner'

const CreateTrip = () => {

  const [place, setPlace] = useState()
  const [formData,setFormData]=useState([])
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate();

  const handleInputChange=(name,value)=>{
    setFormData({
      ...formData,
      [name]:value
    } )
  }

  const SaveAITrip=async(TripData)=>{
    const docId=Date.now().toString()
    
    await setDoc(doc(db,"Trips",docId),{
      userSelection:formData,
      tripData:JSON.parse(TripData),
      id:docId
    })
    navigate('/view-trip/'+docId)
  }

  useEffect(()=>{
    
  },[formData])


  const onGenerateTrip=async()=>{
    if(formData?.noOfDays>5&&!formData?.location||!formData?.budget||!formData?.traveller){
      toast("Please fill all details")
      return;
    }

    setLoading(true)

    const FINAL_PROMPT=AI_PROMPT.replace('{location}',formData?.location).replace('{totalDays}',formData?.noOfDays).replace('{traveller}',formData?.traveller).replace('{budget}',formData?.budget).replace('{totalDays}',formData?.noOfDays)

    console.log(FINAL_PROMPT)

    const result=await chatSession.sendMessage(FINAL_PROMPT)

    console.log(result?.response?.text())
    SaveAITrip(result?.response?.text())
    setLoading(false)
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
      <Button onClick={onGenerateTrip} disabled={loading}>{loading?'Loading..':'Generate Trip!'}</Button>
      </div>
          
    </div>
  )
}

export default CreateTrip