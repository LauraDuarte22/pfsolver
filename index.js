const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");
const port = process.env.PORT || "3060";
app.listen(port, () => {
    console.log(`Me estoy ejecuntando en ${port}`);
  });

app.use(express.static(path.join(__dirname, "/src")));


app.get("/", function (request, response) {
    getProductos();
    response.render("index.html");
  });
  