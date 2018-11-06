const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require('body-parser')
const userRouter=require('./routes/userRout')
mongoose.connect('mongodb://localhost/user', { useNewUrlParser: true },()=>{
    console.log('db connected')
})

const app=express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json

app.use(bodyParser.json())
app.use('/api', userRouter)

app.get('/', (req, res) => {
    res.json({
        messege: "hellow world"
    })
}); 

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});