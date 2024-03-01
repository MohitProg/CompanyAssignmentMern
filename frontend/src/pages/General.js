
import FormInput from "../Components/FormInput";
import Select from "../Components/Select";

import ImageContainer from "../Components/Image";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../Context/CreateContext";
import { imageSizedata,Addfromatdata,Trafficdata } from "../Components/Globaldata";



const General = () => {


  const Navigation=useNavigate();

  const { formdata1, setformdata1,globalFormdata } = useContext(FormContext);

  
  const onChange = (value, name) => {
    setformdata1({ ...formdata1, [name]: value });
 };
  
  // console.log(formdata1)
  const Formsubmit = (e) => {
    e.preventDefault();
    if(formdata1.CompaignName.length>3&&formdata1.DestinationUrl.length>3){
       Navigation("/pricing")
    }
    else{
      console.log("please fill all the filled")
    }


   

  };

  return (
    <>
      <form
        className="section-1 p-[20px] border flex flex-col gap-6 shadow   "
        onSubmit={Formsubmit}
      >
        <FormInput
          placeholder="Enter Compaign Name"
          labelname="Compaign Name"
          warning="Name should be more than 3 character and don't use special Character"
          onchange={onChange}
          name="CompaignName"
          value={globalFormdata.CompaignName}
          required={true}
          pattern= {"^[A-Za-z0-9]{3,50}$"}
        />
      

        <label className="text-sm font-semibold text-gray-500">
          Add Format
        </label>

        <div className="flex flex-wrap items-center gap-5 ">
          {Addfromatdata &&
            Addfromatdata.map(({ label, value ,id}, index) => {
              return (
                <>
                  <ImageContainer
                    label={label}
                    key={id}
                    name="AddFormat"
                    value={value}
                    index={index}
                    onchange={onChange}
                  />
                </>
              );
            })}
        </div>

        {/* selection data  */}

        <Select
          width="w-1/3 sm:w-1/6"
          labelname="Image Size"
          options={imageSizedata}
          value={globalFormdata.ImageSize}
          onchange={onChange}
          name="ImageSize"
        />

        {/* formdata1 */}
        <FormInput
          placeholder="http:// example.com"
          labelname="Destination URL"
          warning="Url type should be http://example.com"
          onchange={onChange}
          name="DestinationUrl"
          pattern= {"^[A-Za-z0-9]{4,50}$"}
          value={globalFormdata.DestinationUrl}
          required={true}
        />

        <Select
          width="w-full"
          labelname="Traffic Channels/Feed"
          options={Trafficdata}
          name="ChannelFeed"
          value={globalFormdata.ChannelFeed}
          onchange={onChange}
        />

        <Select
          width="w-1/3 sm:w-1/6"
          labelname="After Verification"
          options={imageSizedata}
          name="Verification"
          value={globalFormdata.Verification}
          onchange={onChange}
        />

        <hr className="border-[2px] mt-8" />
        <div className="flex  items-center  justify-between ">
          <h1 className="sm:text-lg  font-bold">Upload Creatives</h1>
          <Select
            width="w-[100px]"
            labelname=""
            options={imageSizedata}
            name="UploadCreatives"
            onchange={onChange}
          />
        </div>

        <div className=" sm:p-3 flex items-center justify-end gap-3">
          <button  className="  p-1  sm:p-2 sm:text-sm  border px-3 bg-gray-300 font-semibold rounded">
            PREV STEP
          </button>

          <button  className="   p-1 sm:p-2 sm:text-sm border px-3 bg-pink-800 text-white font-semibold rounded">
            NEXT STEP
          </button>
        </div>
      </form>
    </>
  );
};

export default General;
