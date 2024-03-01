import React from 'react'
import image from "../images/pngwing.com (3).png";


const Image = ({label,value,name,onchange}) => {

    
   


    return (
        <>


            <div className={` border-[2px] border-solid border-pink-800 w-[150px] sm:w-[180px]  p-3 rounded`}>
                <input type="radio" onChange={(e)=>onchange(e.target.value,e.target.name)}     name={name} value={value}  className="p-2" />
                <img src={image} alt="" />
                <h1 className="text-center font-semibold text-gray-500">{label}</h1>
            </div>


        </>
    )
}



export default Image