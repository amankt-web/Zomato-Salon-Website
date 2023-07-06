const express = require("express");
const cors = require("cors");
require('./db/config');
const User = require("./db/User");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/register", (req, res) => {
  res.send("api is running");
});

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
});

app.post("/login",(req,res)=>{
  res.send(req.body)

})


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});


