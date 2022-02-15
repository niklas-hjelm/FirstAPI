//Server info och moduler
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

//databaskonstanter
const databaseModule = require("./databaseModule");
const MessageModel = require("./MessageModel");

//Sätt upp våran server att kunna tyda JSON och urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Sätta en mapp för statiska filer
app.use(express.static(path.join(__dirname, "frontend", "static/")));

// Konstanter för våra front end directories
const htmlDir = path.join(__dirname, "frontend", "static", "html/");

// Hantering av GET Requests
app.get("/", (req, res) => {
  res.sendFile(htmlDir + "index.html");
});

app.get("/message", async (req, res) => {
  const messages = await MessageModel.getAllMessages();
  res.send(messages);
});

//Hantering av POST Requests
app.post("/message", (req, res) => {
  // SPARA I DATABAS
  const messageModel = MessageModel.newMessage(req.body.name, req.body.text);
  databaseModule.storeElement(messageModel);
  res.redirect("/");
});

app.get("*", (req, res) => {
  res.send(404);
});

// Tala om för våran Express-app att börja lyssna efter Requests på porten vi valt
app.listen(port, () => console.log(`App listening on port ${port}!`));
