
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);


module.exports = async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mindmerge', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error(err);
    }
};


module.exports.checkUserCredentials = async function (username, password) {
    try {
        const user = await User.findOne({ username, password });
        return user;
    } catch (error) {
        console.error('Error checking user credentials:', error);
        throw error;
    }
};
