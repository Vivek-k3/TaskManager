const mongoose = require("mongoose");

const db = 'mongodb://gryvs:gryvs@ac-lgrbyy1-shard-00-00.qkyntwv.mongodb.net:27017,ac-lgrbyy1-shard-00-01.qkyntwv.mongodb.net:27017,ac-lgrbyy1-shard-00-02.qkyntwv.mongodb.net:27017/?ssl=true&replicaSet=atlas-8r5jvw-shard-0&authSource=admin&retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
