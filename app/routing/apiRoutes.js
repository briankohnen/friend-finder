let friendData = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {

        let newFriend = 
        {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores.map(elem=>parseInt(elem))
        };
        
        let bestScore = 100;
        let bestie;

        for (var j = 0; j < friendData.length; j++) {

            let currScore = 0;
            let currArr = [];
            
            for (var i = 0; i < newFriend.scores.length; i++) {

                currArr.push(Math.abs(friendData[j].scores[i] - newFriend.scores[i]));

                currScore = currArr.reduce((a,b)=>a+b);

                if (currScore < bestScore) {
                    bestScore = currScore;
                    bestie = friendData[j];
                }
            }
        }

        res.json(bestie);
        friendData.push(newFriend);
    
    });

}