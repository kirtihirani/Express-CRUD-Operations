const { schema } = require('../model/user');
const {validationResult} = require('express-validator')
var Userdb = require('../model/user');
const { add_user } = require('../services/render');

//create and save new user

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    else{
        const errors = validationResult(req)
        if(errors.isEmpty()){
            const user = new Userdb({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                role:req.body.role
            })
            //save user in database
           
            user
                .save(user)
                .then(data=>{
                    //res.send(data)
                    
                    res.redirect('/')
                })
                .catch(err=>{
                    
                    res.status(500).send({
                        
                        message:err.message || "some error occured with create operation"
                    });
                    
                });
        }
        else{
            const alert = errors.array()
            res.send(alert)
            res.render('add_user',{alert})
        }
    }
     
}

//retrieve and return all users
exports.find = (req,res)=>{
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "error occured "})
    })
}

//update a new identified user by userid
exports.update = (req,res)=>{
    Userdb.findByIdAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
        if(err){
            console.log("error occured")
        }
        else{
            res.send(docs)
            res.redirect('/')
        }
    })
    

}

//delete a user with specified id
exports.delete = (req,res)=>{
    const id = req.params.id;
    console.log(id)
    Userdb.findByIdAndDelete({_id:req.params.id},req.body,(err,docs)=>{
        if(err){
            console.log("cannot delete")
        }
        else{
            res.send('User deleted')
            res.redirect('/')
        }
    })
    
    
}

//find a user by id
exports.findUser = (req,res)=>{
    const id = req.params.id;
    Userdb.findById(id)
    .then(user=>{
        res.send(user)
    })
}