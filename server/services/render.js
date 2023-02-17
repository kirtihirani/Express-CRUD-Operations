const axios = require('axios');

exports.homeRoutes = (req,res)=>{
    //make a get request to API users
   res.render('index')
    
}

exports.add_user = (req,res)=>{
    res.render('add_user');
}

exports.update_user = (req,res)=>{
    res.render('update_user');
}