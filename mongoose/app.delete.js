app.delete('/book/:id',function(req,res){
    Book.findOneAndRemove({
        _id:req.params.id
    },function(err,book){
        if(err){
            res.send('error deleting ');
        }
        else{
            console.log(book)
            res.status(204);
        }
    })
})