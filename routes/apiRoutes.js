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
      var totalDifferenceArray = [];
        for (var i = 0; i < friendsData.length; i++) {
           //console.log("friendsData loop:"+ i);
           var friendScores = friendsData[i].scores;
           var differenceArray = [];
              for (var j = 0; j < friendScores.length; j++) {  
                 //console.log("friendScores loop:" + j);    
                 var difference = Math.abs(friendScores[j] - newFriendScores[j]);
                 differenceArray.push(difference);
                 //console.log(differenceArray);
                 var reducer = (accumulator, currentValue) => accumulator + currentValue;
                 var totalDifference = differenceArray.reduce(reducer);
                //console.log(totalDifference);
                }
            totalDifferenceArray.push(totalDifference);
         }
        //console.log(totalDifferenceArray);
           for (t = 0; t < totalDifferenceArray.length; t++) {
               if (totalDifferenceArray[t] < totalDifferenceArray[t+1]) {
               //console.log("if");
               var match = friendsData[t];
               console.log("your friend match is " + match.name);
           } else if (totalDifferenceArray[t+1] == null){
               //console.log("else if");
               var match = friendsData[t];
               res.json(match);
               console.log("your friend match is " + match.name);
           } else {
               //console.log("else");
               t++;
           }
         
         }
       }     
    
    compatibility();

    friendsData.push(newFriend);
  
    
  });
  };
