import React, { useState } from 'react'

import { Switch } from '@mui/material'
const TargetField = ({label,options,name,onchange,value}) => {
  const [toggle,setToggle]=useState(true)
  const handleChange=(e)=>{
  
    setToggle(!toggle)
  } 


  return (
    <>
      <div className='flex w-full flex-col sm:flex-row justify-between '>
        <label htmlFor="" className='text-gray-500 font-semibold'>{label}</label>
        <div className='w-3/4 flex items-center justify-around gap-5'>
          <div className="form-check form-switch">
            <Switch onChange={handleChange}  />


           
          </div>
        
          <div className={`flex flex-col  w-3/4`}>
        
                <select name={name} disabled={toggle} id="" onChange={(e)=>onchange(e.target.name,e.target.value)} className=' text-gray-500 text-sm p-2 rounded  border-[3px]'>
                    <option value="1" defaultValue={!value?"Select":value}>{!value?"Select":value}</option>
                    {
                        options&&options.map(({name,id})=>{ 
                            
                            return(
                                <>
                                
                                <option key={id} value={name}>{name}</option>
                           
                                
                                </>
                            )
                        })
                    }
                </select>
            </div>

        </div>

      </div>




    </>
  )
}

export default TargetField