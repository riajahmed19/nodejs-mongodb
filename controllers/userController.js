const User=require('../models/User')

const getdata= (req, res) => {
    User.find().then(data=>{
        res.json(data)
    }).catch(err=>{
        messege: err.messege
    })
}

const save=(req, res) => {
    let user=new User({
        name: req.body.name,
        email: req.body.email
    })
    user.save()
    .then(data=>{
        res.json({
            messege:"data save succesful",
            data
        })
    })
    .catch(err=>{
        res.json({
            messege: err.messege
        })
    })
}
    module.exports={
        getdata,
        save
    }