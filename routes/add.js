var data = require("../data.json");

exports.addFriend = function(req, res) {
    // variables
    var name = req.query.name;
    var description = req.query.description;
    var imageURL = "http://lorempixel.com/400/400/people";

    // render page, pass name in
    res.render("add", {
        "friendName": name
    });

    // create JSON object
    var newFriend = {
        "name": name,
        "description": description,
        "imageURL":imageURL
    };

    // add new JSON object to existing "database" of friends
    data["friends"].push(newFriend);
}