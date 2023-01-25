const {CreatePiste,deletePiste,getPiste,updatePiste,createpiste,deletepistebyid,getpistebyid}=require("./pisteCycl.controller");
const router = require("express").Router();

router.post("/createPis",CreatePiste);
router.get("/getPist",getPiste);
router.patch("/updatePis",updatePiste);
router.delete("/deletePis",deletePiste);
router.get('/:id', getpistebyid);
router.delete('/:id', deletepistebyid);
router.post('/create', createpiste);
module.exports=router;