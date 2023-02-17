var Userdb = require('../model/model');

//create and save new user
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

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
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "some error occured with create operation"
            });
        });
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
    if(!req.body){
        return res
                .status(400)
                .send({message:"data to update cannot be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){{
            res.status(404).send({message:`cannot update user with ${id}. Maybe user not found!`})
        }}else{
            res.send(data)
        }
    })
    
    .catch(err=>{
        res.status(500).send({message:"error updating user info"})
    })
}

//delete a user with specified id
exports.delete = (req,res)=>{
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            {res.status(404).send({message:`cannot delete user with id ${id}`})}
        }else{
            res.send("user deleted")
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