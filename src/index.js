const app = require('./app');
const { PORT } = require('./config/environment');

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});