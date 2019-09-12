var mongoose = require ("mongoose");

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Comment"
        }
    ],
    author:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Campground", campgroundSchema);
// Campground.create({
//     name: "Prvi kamp",
//     image:"https://www.pc.gc.ca/en/pn-np/ab/banff/activ/camping/~/media/802FD4AF791F4C6886E18CBF4A2B81B2.ashx?w=595&h=396&as=1",
//     description: "Beautiful camp, would highly recommend!"
// }, function(err, campground){
//     if (err){
//         console.log("An error with adding campground to database");
//     }
//     else{
//         console.log(campground);
//     }
// });