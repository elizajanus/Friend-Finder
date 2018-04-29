//api routes

var friendsData = require("../data/friends");

module.exports = function(app) {
    
app.get("/api/friends", function(req, res) {
    return res.json(friendsData);
  });


app.post("/api/friends", function(req, res){
  var newFriend = req.body;

  function compatibility() {
    var newFriendScores = newFriend.scores;  
    
    for (var i = 0; i < friendsData.length; i++) {
        console.log("friendsData loop:"+ i);
        var friendScores = friendsData[i].scores;
         var differenceArray = [];
         for (var i = 0; i < friendScores.length; i++) {  
          console.log("friendScores loop:" + i);    
          var difference = Math.abs(friendScores[i] - newFriendScores[i]);
          differenceArray.push(difference);
          console.log(differenceArray);
          var reducer = (accumulator, currentValue) => accumulator + currentValue;
          var totalDifference = differenceArray.reduce(reducer);
          console.log(totalDifference);
         } 
    }
  };
  compatibility();

  friendsData.push(newFriend);

  res.json(newFriend);
});

};
