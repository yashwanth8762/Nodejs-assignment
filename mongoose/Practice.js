var mongoose =require('mongoose');
var express =require('express');
var bodyParser=require('body-parser');
var Practice=express();
var pra=require('./P.model')
mongoose.connect('mongodb://localhost/example');

Practice.use(bodyParser.json());
Practice.set('view engine','ejs')
Practice.use(bodyParser.urlencoded({
    extended:true
}));

Practice.get('/',function(req,res){
    res.end('hello welcome here');
});


Practice.post('/pra',function(req,res){
    var newpra= new pra();
    newpra.id=req.body.id;
    newpra.name=req.body.name;
    newpra.age=req.body.age;
    newpra.save(function(err,Practi){
        if(err){
        res.send("error");
        }
        else{
            res.send(Practi);
        }
    })
})

Practice.get('/pra',function(req,res){
    pra.find({})
    .exec(function(err,Practi){
        if(err){
            res.send(err);
        }
        else{
            res.send(Practi);
        }
    })
})

Practice.get('/pra/:id',function(req,res){
    pra.findOne({
        id:req.params.id
    })
    .exec(function(err,Practi){
        if(err){
            res.send(err);
        }
        else{
            res.send(Practi);
        }
    })
})

Practice.listen(8080,function(){
    console.log('reunning on port 8080');
})