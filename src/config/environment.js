const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

module.exports = {
    PORT
};