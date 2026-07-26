import express from "express";
import axios from "axios";
import { stringify } from "node:querystring";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Nacs";
const yourPassword = "Test123";
const yourAPIKey = "4d5693a8-5129-44fe-afd5-7ebd30906436";
const yourBearerToken = "6db977bd-4ae1-4ed3-9314-210ea0ae2603";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await axios.get(`${API_URL}random`)
    const result = response.data;
    console.log(result);
    res.render("index.ejs", { content: result.secret });
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  try {
    const response = await axios.get(`${API_URL}all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    const result = JSON.stringify(response.data);
    console.log(result);
    res.render("index.ejs", { content: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
});

app.get("/apiKey", (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try {
    const response = await axios.get(`${API_URL}/filter?score=5&apiKey=${yourAPIKey}`);
    const result = JSON.stringify(response);
    res.render("index.ejs", { content: result.secret });
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402

  try {
    const response = await axios.get(`${URL}/secrets/1`, {
      headers: {
        Authorization: yourBearerToken
      }
    });
    const result = JSON.stringify(response);
    res.render("index.ejs", { content: result.secret });
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
