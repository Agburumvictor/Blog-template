const express = require ("express");
const _ = require('lodash');

const router = express.Router();

const post = "testing to see if it works lorem hhwybugbwlbwyvwvyvwuuyyu ";
const contactUs = "contact us for more services";
const aboutUs = "know more about us and see what we have to  offer";

var fullPosts = [];

router.get("/", function(req, res){

    res.render("home", {
        postTime : post, 
        fullPosts : fullPosts
    });

  
});

router.get("/about", function(req, res){
    res.render("about", {aboutUs: aboutUs});
});

router.get("/contact", function(req, res){
    res.render("contact", {contactUs: contactUs});
});

router.get("/compose", function(req, res){

    res.render("compose");
});


router.get ("/categories/:topic", function(req, res){

    const topics = _.lowerCase(req.params.topic);

    fullPosts.forEach(function (full) {

        const postCheck = _.lowerCase(full.title);

        if( postCheck === topics){

            res.render("categories", {
                title : full.title,
                content : full.content
            });
        };
        
    });

   

});

router.post("/compose", function(req, res){

    const fullPost = { 
        title : req.body.postTitle,
        content : req.body.postBody
    };

    fullPosts.push(fullPost);


    res.redirect("/");

  
});




module.exports = router;


