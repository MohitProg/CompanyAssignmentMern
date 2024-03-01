import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../Context/CreateContext";
import ToastAlert from "../Components/ToastAlert";
const Pricing = () => {
  const { formdata2, setformdata2, globalFormdata} = useContext(FormContext);

  const Navigate = useNavigate();

  const handleChange = (e) => {
    setformdata2({ ...formdata2, [e.target.name]: e.target.value });
  };
  const Form2Submit = (e) => {
    e.preventDefault();

    console.log(formdata2.BidingValue)
    console.log(formdata2.CompaignBudget)
    console.log(formdata2.DailyBudget)
    console.log(formdata2.PricingModal)


    if (
      formdata2.BidingValue &&
      formdata2.CompaignBudget &&
      formdata2.DailyBudget &&
      formdata2.PricingModal
    ) {
      Navigate("/targettings");
      console.log("mohit")
    }else{
        ToastAlert("please add all the field","error")
    }


  };

  // error handling
  const [focused, setFocused] = useState(false);
  const handlefocused = () => {
    setFocused(true);
  };

  return (
    <>
      <form
        className="section-1 p-[20px] border flex flex-col gap-3 shadow   "
        onSubmit={Form2Submit}
      >

        <h1 className="font-semibold text-gray-500">Pricing & Bidings</h1>
        <div className="flex flex-col  gap-2">
          <label htmlFor="" className="star text-sm text-gray-500">
            Prcing Model
          </label>
          <div className="flex items-center justify-start gap-2 mt-3">
            <input
              type="radio"
              name="PricingModal"
              value="CPM"
              onChange={handleChange}
            />
            <label htmlFor="" className="text-gray-500    font-semibold">
              CPM
            </label>
            <input
              type="radio"
              name="PricingModal"
              value="Smart CPM"
              onChange={handleChange}
            />
            <label htmlFor="" className="text-gray-500  font-semibold">
              Smart CPM
            </label>
            <input
              type="radio"
              name="PricingModal"
              value="CPC"
              onChange={handleChange}
            />
            <label htmlFor="" className="text-gray-500  font-semibold">
              CPC
            </label>
          </div>

        </div>

        <div className="flex flex-col p-1  items-start gap-2 mt-3">
          <label htmlFor="" className="star text-sm text-gray-500">
            Biding Value(CPM)
          </label>
          <div className=" border-[3px] flex items-center justify-end gap-3 rounded">
            <i className="bi bi-currency-dollar font-bold  text-gray-500"></i>
            <input
              type="text"
              className="p-1   placeholder:ml-3"
              name="BidingValue"
              value={globalFormdata.BidingValue}
              placeholder="eg.$ 0.002"
              onChange={handleChange}
              onBlur={handlefocused}
              focused={focused.toString()}
              required={true}
            />
          </div>

        </div>
        <hr className="border-[2px] mt-5" />

        {/* Advertising Budget(USD) */}
        <div>
          <h1 className="font-semibold text-gray-500">
            Advertising Budget(USD)
          </h1>
        </div>

        <div className="flex  flex-col sm:flex-row gap-2">
          <div className="flex flex-col p-1  items-start gap-2 mt-3">
            <label htmlFor="" className="star text-sm text-gray-500">
              Compaign Budget
            </label>
            <div className=" border-[3px] flex items-center justify-end gap-3 rounded">
              <i className="bi bi-currency-dollar font-bold  text-gray-500"></i>
              <input
                type="text"
                className="p-1   placeholder:ml-3"
                name="CompaignBudget"
                value={globalFormdata.CompaignBudget}
                onChange={handleChange}
                placeholder="eg.$ 0.002"
                onBlur={handlefocused}
                focused={focused.toString()}
                required={true}
              />
            </div>

          </div>

          <div className="flex flex-col  items-start gap-2 mt-3 p-1">
            <label htmlFor="" className=" star text-sm text-gray-500">
              Daily Budget
            </label>
            <div className=" border-[3px] flex items-center justify-end gap-3 rounded">
              <i className="bi bi-currency-dollar font-bold  text-gray-500"></i>
              <input
                type="text"
                className="p-1   placeholder:ml-3"
                name="DailyBudget"
                value={globalFormdata.DailyBudget}
                placeholder="eg.$ 0.002"
                onChange={handleChange}
                onBlur={handlefocused}
                focused={focused.toString()}
                required={true}
              />
            </div>

          </div>
        </div>


        <div className=" p-3 flex items-center justify-end gap-3">
          <Link to="/" className=" p-1 sm:p-2 text-sm border px-3 bg-gray-300 font-semibold rounded">
            PREV STEP
          </Link>

          <button type="sumbit" className=" p-1 sm:p-2 text-sm border px-3 bg-pink-800 text-white font-semibold rounded">
            NEXT STEP
          </button>
        </div>
      </form>
    </>
  );
};

export default Pricing;
