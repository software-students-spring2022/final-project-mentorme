const express = require("express");
const app = express();
const router = express.Router();
const {User} = require("./models/User") 

const user = {};

router.get('/', async (req, res) => {
  const auth = req.query.auth;
  console.log(auth);
  console.log("params" + req.query._id)

  if (auth == "false") {
    try {
      const userinfo = await User.findOne({ email : req.query.email })
      user.auth = true;
      user.first_name = userinfo.first_name;
      user.last_name = userinfo.last_name;
      user.bio = userinfo.bio;
      user.pic = userinfo.picture;
      user.email = userinfo.email;
      user.id = userinfo._id
      console.log(userinfo.picture)
      res.json(userinfo) 
    } catch (e) {
      console.log("Couldn't Find User");
      res.status(500)
    }
    // user.first_name = req.query.first_name;
    // user.last_name = req.query.last_name;
    // user.bio = req.query.bio;
    // user.pic = req.query.pic;
    // user.email = req.query.email;
    // user.id = req.query.ObjectId;
  }
  if (auth == "reset") {
    user.auth = false;
  }
  // else if (auth == "true") {
  //   try {
  //     const user = await User.findOne({ email : user.email })
  //     //res.json(userinfo) 
  //   } catch (e) {
  //     console.log("Couldn't Find User");
  //     res.status(500)
  //   }
  // }
  console.log(user)
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

