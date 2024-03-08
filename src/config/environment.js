const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('The MONGODB_URI environment variable must be defined.');
}

module.exports = {
    PORT,
    MONGODB_URI,
};