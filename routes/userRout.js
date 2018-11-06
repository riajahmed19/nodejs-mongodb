const express=require("express")
const router=express.Router()
const{getdata, save}=require('../controllers/userController')

router.get('/data', getdata)
router.post('/data', save)
module.exports=router