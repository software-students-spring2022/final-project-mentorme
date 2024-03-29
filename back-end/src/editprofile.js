const express = require("express");
const mongoose = require('mongoose')
const app = express();
const router = express.Router();
const User = require("./models/Users") 

router.post("/", async (req, res) => {
    try {
        const userinfo = await User.findOneAndUpdate({ _id : req.body.curruser },
            {   first_name : req.body.first_name, 
                last_name : req.body.last_name, 
                email : req.body.email, 
                bio : req.body.bio, 
                password : req.body.password, 
                picture : req.body.picture
            })
        res.json(userinfo) 
    } catch (e) {
        console.log("Couldn't Find User");
    }
})


module.exports = router;