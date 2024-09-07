import express, { json } from "express";
import morgan from "morgan";

const users = ["Aman", "Rohit", "Dhrumil"];

const app = express();
app.use(json());

morgan.token("ip", function (req, res) {
  return req.ip;
});

morgan.token("timestamp", function () {
  return new Date().getTime();
});

app.use(morgan("Timestamp: :timestamp | Method: :method | URL: :url | IP Address: :ip | Status: :status | Response Time: :response-time ms"));

app.get("/getUsers", (req, res) => {
  res.json(users);
});

app.listen(5001, () => {
  console.log("Server listening at Port 5001...");
});
