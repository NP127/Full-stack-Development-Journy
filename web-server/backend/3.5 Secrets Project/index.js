//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", passwdCk);

app.listen(port, () => {
  console.log(`Good to go on: ${port}`);
});

function passwdCk(req, res) {
  const pass = req.body.password;
  if ( pass === "ILoveProgramming") {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
}
