const express = require ("express");
const bodyParser = require ("body-parser");
 
const app = express();



const mainRouter = require("./routes/index");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static("node_modules/bootstrap/"));








app.use("/", mainRouter);

app.listen(3000, function(req, res){
    ( console.log("server is listening in port 3000"));
});









