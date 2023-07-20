const express=require('express')
const router=express.Router()
const UserRoutes = require('./UserRotes')

router.get('/',(req, res) =>{
    res.send("Welcome to stack clone")
});

router.use('/user',UserRoutes);


module.exports = router;