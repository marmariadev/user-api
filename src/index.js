const app = require('./app');
const { PORT } = require('./config/environment');
const database = require('./config/database');

database.connect();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});