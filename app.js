const express = require("express");
var addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let dateTime = new Date();
  console.log(dateTime); // todays's date
  const result = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100
  );
  console.log(result); //add  100 days
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
