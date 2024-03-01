import React, { useState } from "react";
import { FormContext } from "./CreateContext";
import axios from "axios";
import ToastAlert from "../Components/ToastAlert";
const Context = ({ children }) => {
  const [formdata, setformdata] = useState(null);

  //  fromdata 2;

  const [formdata1, setformdata1] = useState({
    CompaignName:"",
    AddFormat:"",
    ImageSize:"",
    DestinationUrl:"",
    ChannelFeed:"",
    Verification:"",
    UploadCreatives:""


  });

  // formdata 2;

  const [formdata2, setformdata2] = useState({
    PricingModal:"",
    BidingValue:"",
    CompaignBudget:"",
    DailyBudget:""


  });

  //    fromdata 3

  const [formdata3, setformdata3] = useState({

    Countries:"",
    Device:"",
    OperatingSystem:"",
    Browser:"",
    CType:"",
    Language:"",
    IpRange:""

  });



  const globalFormdata = { ...formdata1, ...formdata2, ...formdata3 };

  const postdata = async () => {
    const res = await axios.post(
      "http://localhost:80/data/formdata",
      globalFormdata
    );
    console.log(res.data.msg);

    if (res.data.success === true) {
      ToastAlert(res.data.msg,"success");
      setformdata1({
        CompaignName:"",
        AddFormat:"",
        ImageSize:"",
        DestinationUrl:"",
        ChannelFeed:"",
        Verification:"",
        UploadCreatives:""
      })

      setformdata2({
        PricingModal:"",
        BidingValue:"",
        CompaignBudget:"",
        DailyBudget:""
    
      })

      setformdata3({
        Countries:"",
        Device:"",
        OperatingSystem:"",
        Browser:"",
        CType:"",
        Language:"",
        IpRange:""
      })

    }

    if (res.data.success === false) {

      ToastAlert(res.data.msg,"error")
    }

  };

  return (
    <>
      <FormContext.Provider
        value={{
          setformdata,
          formdata,
          setformdata1,
          setformdata2,
          setformdata3,
          formdata1,
          formdata2,
          formdata3,
          globalFormdata,
 
          postdata,
          alert
        }}
      >
        {children}
      </FormContext.Provider>
    </>
  );
};

export default Context;
