const mongoose = require('mongoose')

const url = "mongodb://vaishnavitile2210:tZJv5bc6dcq-je4@ac-28cspyb-shard-00-00.xfizdhk.mongodb.net:27017,ac-28cspyb-shard-00-01.xfizdhk.mongodb.net:27017,ac-28cspyb-shard-00-02.xfizdhk.mongodb.net:27017/?ssl=true&replicaSet=atlas-hgh7qr-shard-0&authSource=admin&retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose.connect(url)
    .then((res) => console.log("MongoDB is connected Successfully"))
    .catch((err) => console.log("Error: ",err));
};
