const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://mohitjj999:1fxktO5WB4EgCu4O@blogdata.swsuk8a.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("data base is connected ");

}).catch((error)=>{
    console.log(error)
});


module.exports=mongoose;