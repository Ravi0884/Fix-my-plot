const express = require('express')
const router = express.Router()
const User = require('../Models/User')

router.post('/userRegistration', async (req, res) => {
  try {
    const userData = new User({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      mobile: req.body.mobile,
    })
    await userData.save().then((data) => {
      res.status(200).send({
        status: true,
        data: data,
      })
    }).catch((err) => {
      res.status(400).send({
        status: false,
        message: "Error while saving User"
      })
    })
  } catch {
    res.status(400).send({
      status: false,
      message: "Error while adding Product"
    })
  }
})

router.post('/userlogin', async (req, res) => {
  try {
  const email = req.body.email
  const password = req.body.password
  const admin = await User.find({ email: email })
  
    if (admin[0].email === email && admin[0].password === password) {
      res.status(200).send({
        status: true,
        data: admin,
      })
    } else {
      res.status(400).send({
        status: false,
        message: "Password Not Matched"
      })
    }
  } catch {
    res.status(400).send({
      status: false,
      message: "User Not Found"
    })
  }
})

module.exports = router