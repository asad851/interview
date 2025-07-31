import express from "express";
import connect from "./config/mongoose-config.js"
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json("app running");
});
function start_server_() {
  app.listen(3000, () => {
    console.log("server running");
  });
}
start_server_();
