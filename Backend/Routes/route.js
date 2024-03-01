const route=require("express").Router();
const {getFormdata, postFormdata}=require("../Controllers/index");

route.post("/formdata",postFormdata)


module.exports=route;