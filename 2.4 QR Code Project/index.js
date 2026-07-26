import inquirer from "inquirer";
import fs from "node:fs";
import qr from "qr-image";
/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
inquirer
  .prompt([{
       message: "Type in your URL: ",
       name: "URL",
  }])
  .then((answers) => {
     const url = answers.URL;
      var qr_svg = qr.image(url);
      qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("./URL.txt", answers, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Something wennt wrong");
    } else {
      console.log("Your Qr code has been saved");
    }
  });
