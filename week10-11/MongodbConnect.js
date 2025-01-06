let mongoose = require("mongoose");
const MONG_URI = "mongodb://127.0.0.1:27017/w10";
mongoose.connect(MONG_URI, {
  useUnifiedTopology: true,
  authSource: "admin",
});
const db = mongoose.connection;
db.on("error", function (err) {
  console.log("Error occured" + err);
});
db.once("connected", function () {
  console.log("connection is successful to" + MONG_URI);
});
module.exports = db;
