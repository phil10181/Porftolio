const express = require('express');
const bodyParser = require('body-parser');
// const ejs = require("ejs");
const app = express();

// app.use("view engine", ejs);
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.listen(procss.env.PORT || 3000, function(){
    console.log("the server is running");
});

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});
