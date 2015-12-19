var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose  =require('mongoose');


var Project  = require('./app/project/project');

mongoose.connect('mongodb://x:x@x:63134/cricut_projects');


app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());



var port = process.env.PORT || 8080;


var router  = express.Router();


router.get('/',function(req,res){

    res.json({"message":"hi sriram"});

});

router.route('/projects')
    .post(function (req,res){

        var prj  = new Project();
        prj.name = req.body.name;

        prj.save (function(err){

            if(err){
                res.send(err);
            }

            res.json({message:'bear created'});

        });
    });


app.use('/api',router);

app.listen(port);

