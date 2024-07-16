import express from "express";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();
let week;
let advice;
if (day > 0 && day < 6) {
  advice = "Hey!It is a Weekday, It's Time to Work Hard";
} else {
  advice = "Hey!It is a Weekend It's Time to have fun";
}
app.get("/", (req, res) => {
  res.render("index.ejs", {advice});
});

app.listen(port, () => {
  console.log(`App Listening on port${port}`);
});
