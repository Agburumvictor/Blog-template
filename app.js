const express = require ("express");
const bodyParser = require ("body-parser");
const app = express();
const post = "testing to see if it works lorem hhwybugbwlbwyvwvyvwuuyyu ";
const contactUs = "contact us for more services";
const aboutUs = "know more about us and see what we have to  offer";

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static("node_modules/bootstrap/"));



var fullPosts = [];

app.get("/", function(req, res){

    res.render("home", {
        postTime : post, 
        fullPosts : fullPosts
    });

  
});

app.get("/about", function(req, res){
    res.render("about", {aboutUs: aboutUs});
});

app.get("/contact", function(req, res){
    res.render("contact", {contactUs: contactUs});
});

app.get("/compose", function(req, res){

    res.render("compose");
});


app.post("/compose", function(req, res){

    const fullPost = { 
        title : req.body.postTitle,
        content : req.body.postBody
    };

    fullPosts.push(fullPost);


    res.redirect("/");

  
});




app.listen(3000, function(req, res){
    ( console.log("server is listening in port 3000"));
});









