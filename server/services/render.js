const axios = require('axios');
const { Router } = require('express');
//const {alert}= require('../controller/controller')
const User = require('../model/model')

exports.homeRoutes = (req,res)=>{
    //make a get request to API users
    axios.get('http://localhost:8080/api/users')
      .then(function(response){
       
        res.render('index',{users:response.data});
      })
    
}

exports.add_user = (req,res)=>{
    
    res.render('add_user');
}

exports.update_user = (req,res)=>{
  console.log(req.params.id)
  User.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err,docs)=>{
    if(err){
      console.log("cant find")
    }
    else{
      res.render('update_user',{docs})
    }
  })
}