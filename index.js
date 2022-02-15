//Server info och moduler
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

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

// const messages = [];
// app.get("/message", (req, res) => {
//   res.send(messages);
// });

// //Hantering av POST Requests
// app.post("/message", (req, res) => {
//   console.log(req.body);
//   messages.push(req.body);
//   res.redirect("/");
// });

// Tala om för våran Express-app att börja lyssna efter Requests på porten vi valt
app.listen(port, () => console.log(`App listening on port ${port}!`));
