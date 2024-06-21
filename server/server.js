// DEPENDENCIES
const app = require("./app.js");

// Import our environment variables .env
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});