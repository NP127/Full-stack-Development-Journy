  import express from "express";
  const app = express();
  const port = 3000;

  app.get("/" , (req , res) => {
    res.send("<h1>hello</h1> <p>this is the root</p>")
  })
  app.get("/about" , (req , res) => {
    res.send("<h1>hello</h1> <p>this is the sudo about response</p>")
  })
  app.get("/info" , (req , res) => {
    res.send("<h1>hello</h1> <p>this is the sudo info response</p>")
  })

  app.listen(port , () => {
    console.log(`server is running on : ${port}.`);
  })