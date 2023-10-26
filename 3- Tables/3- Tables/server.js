
// Required for Node to read .env file
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
  console.log(`To test the IFT 458 REST App Click Or Type: http://localhost:${port}...`);
});

