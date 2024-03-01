const FormSchema=require("../Modals/formModals")



const postFormdata=async(req,res)=>{
    console.log(req.body)
    const {CompaignName,DestinationUrl,BidingValue,CompaignBudget,DailyBudget,PricingModal}=req.body;
    
    try {
        
    
        if(!CompaignName||!DestinationUrl||!BidingValue||!CompaignBudget||!DailyBudget||!PricingModal){
            return res.send({success:false,msg:"please filled rquired filled"})
        }else{

            let postdata=new FormSchema(req.body);
            await postdata.save();

            return res.send({success:true,msg:"Data Save Successfuly"})



        }
        
        
    } catch (error) {
        return res.send({success:false,msg:"internal server error"})
    }





}

const getFormdata=()=>{

}


module.exports={postFormdata,getFormdata};