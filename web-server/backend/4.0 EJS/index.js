import express from "express";


const port = 3000 ;
const app = express();

app.get("/" , (req , res) => {
     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     const weathers = ["Sunny" , "Cloudy" , "Cloudy", "Windy" , "Rainny" ,"Windy" , "Sunny"];
     const date = new Date();
     var day = days[date.getDay()];
     var weather = weathers[date.getDate()];
     var name = "...What was your name.";
     res.render("index.ejs" , {day , name  , weather});
})
app.listen(port , () => {
  console.log(`Good to go on ${port}`);
})