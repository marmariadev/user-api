const mongoose = require('mongoose');
const { MONGODB_URI } = require('./environment');

const connectWithRetry = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.log('Error conecting to MongoDB Atlas', error);
        setTimeout(connectWithRetry, 5000);
    }
}

module.exports = {
    connect: connectWithRetry,
};