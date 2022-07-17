const express = require("express");
const Quiz = require("../model/quiz");
const User = require("../model/user");


const month=['Jan',"Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const router=express.Router();

router.get("/profile",async(req,res)=>{
    const user=req.session.username;
    const isLoggedIn=req.session.isLoggedIn;
    
 
 
    const user_data=await User.findOne({username:user});
    const allid=user_data.quiz;
    const quiz=await Quiz.find({
        _id:{
            $in:allid                
        }
    });

    // console.log(quiz);
    
    res.render('profile.ejs',{quiz,isLoggedIn,user,month,user_data});
})

module.exports=router;