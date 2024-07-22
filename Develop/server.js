const express = require('express');
const routes = require('./routes'); // Import routes from routes directory
const sequelize = require('./config/connection'); // Import Sequelize connection
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in routes/index.js
app.use('/api', routes);

// Sync sequelize models to the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
