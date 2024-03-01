const express=require("express")
const Formroute=require("./Routes/route");
const cors=require("cors")
const app=express();

require("./db/db")

app.use(cors());
app.use(express.json());

app.use("/data",Formroute)


app.listen(80,()=>{
    console.log("server is started")
})