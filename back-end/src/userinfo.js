const express = require("express");
const app = express();
const router = express.Router();

const user = {};

router.get('/', (req, res) => {
  const auth = req.query.auth;
  // console.log(auth);
  // console.log("params" + req.body.userId)

  if (auth == "false") {
    user.auth = true;
    user.first_name = req.query.first_name;
    user.last_name = req.query.last_name;
    user.bio = req.query.bio;
    user.pic = req.query.pic;
    user.email = req.query.email;
    user.id = req.query.id;
    // console.log("params" + req.query.id)

  }

  if (auth == "reset") {
    user.auth = false;
  }

  // console.log("user here " + user.id)
  res.json(user)
});

// router.get('/:id', (req, res) => {
//   const id = router.param('id');
//   console.log(id);
// })

// router.post("/", (req, res) => {
//   const data = {
//     picture: req.body.pic
//   }
//   console.log(req.body.pic);
//   // res.send("Data has been sent")
//   pic = req.body.pic;
//   res.send(req.body.pic)
// })


module.exports = router;

