const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/firstApiDatabase");

const database = mongoose.connection;
database.on("error", console.error.bind(console, "connection error:"));
database.once("open", () => {
  console.log("Connected to database!");
});

exports.storeElement = (model) => {
  model.save();
};
