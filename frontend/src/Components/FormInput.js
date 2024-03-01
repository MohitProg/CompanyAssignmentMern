import React, { useState } from "react";

const FormInput = ({
    placeholder,
    labelname,
    warning,
    onchange,
    name,
    value,
    required,
    pattern,
}) => {


    const [focused,setFocused]=useState(false);
    const handlefocused=()=>{
        setFocused(true)
    }

    return (
        <>
            <div className=" flex flex-col gap-2 ">
                <label className="star text-sm font-semibold text-gray-500">
                    {labelname}
                </label>
                <input
                    type="text"
                    onChange={(e) => onchange(e.target.value, e.target.name)}
                    pattern={pattern}
                    className="p-1 border-[3px] rounded"
                    required={required}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onBlur={handlefocused}
                    focused={focused.toString()}
                />
                <p>{warning}</p>
            </div>
        </>
    );
};

export default FormInput;
