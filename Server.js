const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PoRt = 4842;
const app = express();
app.use(express.json());
app.get("/", (req,res)=>{
    res.redirect("/Main");
});

app.use("/Main", express.static(path.join(__dirname, "Public/Main")));
app.get("/Main/Public/Accounts/index.html", (req,res)=>{
    res.redirect("/Accounts")
});
app.use("/Accounts", express.static(path.join(__dirname, "Public/Accounts")));
app.get("/Accounts/Public/Main/index.html", (req,res)=>{
    res.redirect("/Main");
});
mongoose.connect("mongodb://localhost:27017/eShopDB").then(()=>{console.log("Mongoose connected successfuly congrats :>")  
}).catch(err=>{console.log(`an Error has occurred ${err}`)});
app.listen(PoRt, ()=>{
    console.log(`Server at: localhost:${PoRt}`);
});