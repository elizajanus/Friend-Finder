var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var friends = [
    {
      name: "billybob",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [
         5,
         1,
         4,
         4,
         5,
         1,
         2,
         5,
         4,
         1
      ]
    }
  ];

//html routes
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

  //api routes
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });


app.post("/api/friends", function(req, res){
  var newFriend = req.body 

  friends.push(newFriend);

  res.json(newFriend); 
});


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });