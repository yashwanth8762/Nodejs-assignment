app.post('/book',function(req,res){
    var newBook = new Book();
    newBook.title=req.body.title;
    newBook.author= req.body.author;
    newBook.category= req.body.category;
    newBook.save(function(err,book){
        if(err){
            res.send('error');
        }else{
            console.log(book)
            res.send(book);
        }
    });
});
app.post('/book2',function(req ,res){
    Book.creat(req.body,function(err,body){
        if(err){
            res.send('error');
        }else{
            console.log(book)
            res.send(book);
        }
    });
});