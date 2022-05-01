const express = require("express");
const app = express();
const router = express.Router();


router.get('/', (req, res) => {
  res.send("hello")
})

router.post("/", (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  }
  console.log(req.body);
  // res.send("Data has been sent")
  res.send(data)
})


module.exports = router;

