const express = require("express");

const app = express();



app.use("/hello", (req,res)=>{
    res.send(" hello hello!!")
});

app.use("/test", (req,res)=>{
    res.send("This is test request")
});

app.use("/",(req,res)=>{
    res.send("this is  default url");
});

app.listen(7777, ()=>{
    console.log("the server is listening at port 7777");
})