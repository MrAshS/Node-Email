//keys.js
if (process.env.NODE_EMV === "production") {
  //in production
  module.exports = require("/prod");
} else {
  //in development
  module.exports = require("./dev");
}
