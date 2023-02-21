const Book = require('../model/books');


exports.addBook = (req,res)=>{
    const name = req.body.name;
    const author = req.body.author;
    const publisher = req.body.publisher;
    const cost = req.body.cost

    const book  = new Book({name,author,publisher,cost})
    book.save(err=>{
        if(err){
            res.send(err)
        }
        else{
            res.send("Book added successfully")
        }
    })
}

exports.findAllBooks = (req,res)=>{
    Book.find((err,docs)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(docs)
        }
    })
}

exports.findBook = (req,res)=>{
    Book.findById({_id:req.params.id},(err,docs)=>{
        if(err){
            res.send("book not available with this id")
        }
        else{
        res.send(docs);
        }
    })
}

exports.updateBook = (req,res)=>{
    Book.findByIdAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
        if(err){
           res.send("cant update")
        }
        else{
            res.send(docs)
        }
    })
}

exports.deleteBook = (req,res)=>{
    Book.findByIdAndDelete({_id:req.params.id},req.body,(err,docs)=>{
        if(err){
            console.log("error occured")
        }
        else{
            res.send("book deleted successfully")
        }
    })

}