const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: String,
  text: String,
});

const Message = mongoose.model("Message", messageSchema);

exports.newMessage = (inName, inText) => {
  return new Message({
    name: inName,
    text: inText,
  });
};

exports.getAllMessages = async () => {
  return await Message.find({});
};
