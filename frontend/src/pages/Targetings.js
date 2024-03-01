import React from "react";
import { useState } from "react";
import { Switch } from "@mui/material";
import TargetField from "../Components/TargetField";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../Context/CreateContext";
import { countries,OperatingSystemdata,BrowserData,Devicedata, Ctypedata, Languagedata } from "../Components/Globaldata";





const Targetings = () => {
  const { formdata3, setformdata3,postdata } = useContext(FormContext);

  const onChange = (value, name) => {
    setformdata3({ ...formdata3, [value]: name });
  };

  const form3Submit = (e) => {
    e.preventDefault();
    postdata();
  
  };

  const [toggle,setToggle]=useState(true)
  const handleChange=(e)=>{
  
    setToggle(!toggle)
  } 

 
  

  return (
    <>
      <form
        className="section-1 p-[20px] border flex flex-col gap-3 shadow   "
        onSubmit={form3Submit}
      >

        <h1 className="font-semibold text-gray-500">Targetings</h1>

        <div className="flex flex-col gap-4">
          {/* target fileds of a formdata 3 */}
          <TargetField
            label="Geo(Countries)"
            onchange={onChange}
            options={countries}
            name="Countries"
            value={formdata3.Countries}
          />

          <TargetField
            label="Device"
            onchange={onChange}
            options={Devicedata}
            name="Device"
            value={formdata3.Device}
          />
          <TargetField
            label="Operating System"
            onchange={onChange}
            options={OperatingSystemdata}
            name="OperatingSystem"
            value={formdata3.OperatingSystem}
          />
          <TargetField
            label="Browser"
            onchange={onChange}
            options={BrowserData}
            name="Browser"
            value={formdata3.Browser}
          />
          <TargetField
            label="Connection Type"
            onchange={onChange}
            options={Ctypedata}
            name="CType"
            value={formdata3.CType}
          />
          <TargetField
            label="Language"
            onchange={onChange}
            options={Languagedata}
            name="Language"
            value={formdata3.Language}
          />
          <div className="flex w-full flex-col gap-3 sm:flex-row justify-between mt-2 ">
            <label htmlFor="" className="text-gray-500 font-semibold">
              IP Range:
            </label>
            <div className=" sm:w-3/4 flex  justify-around gap-5">
              <div className="form-check form-switch">
                <Switch onChange={handleChange} />
              </div>

              {/* text area  */}

              <textarea
                name="IpRange"
                id=""
                placeholder="Enter IP Range Comma Seprated "
                className="w-3/4 p-1 bg-gray-200 placeholder:font-semibold border-[3px] text-gray-500"
                cols="30"
                rows="6"
                onChange={(e) => onChange(e.target.name, e.target.value)}
                value={formdata3.IpRange}
                disabled={toggle}
              ></textarea>
            </div>
          </div>
        </div>

        {/* button */}
        <div className=" p-3 flex items-center justify-end gap-3">
          <Link
            to="/pricing"
            className=" p-1 sm:p-2 text-sm border px-3 bg-gray-300 font-semibold rounded"
          >
            PREV STEP
          </Link>
          <button
            to="/settings"
            className=" p-1 sm:p-2 text-sm border px-3 bg-pink-800 text-white font-semibold rounded"
          >
            NEXT STEP
          </button>
        </div>
      </form>
    </>
  );
};

export default Targetings;
