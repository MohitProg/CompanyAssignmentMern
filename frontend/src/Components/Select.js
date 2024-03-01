import React from 'react'

const Select = ({width,labelname,options,name,onchange,value}) => {

    return (
        <>

            <div className={`flex flex-col gap-2 ${width}`}>
            <label className='text-sm font-semibold text-gray-500 '>{labelname}</label>
                <select name={name} id="" onChange={(e)=>onchange(e.target.value,e.target.name)} className=' text-gray-500 text-sm p-2 rounded  border-[3px]'>
                    <option value="1" defaultValue={!value?"Select":value}>{!value?"Select":value}</option>
                    {
                        options&&options.map(({value,id},i)=>{
                    
                            
                            return(
                                <>
                                
                                <option key={id} value={value}>{value}</option>
                           
                                
                                </>
                            )
                        })
                    }
                </select>
            </div>



        </>
    )
}

export default Select