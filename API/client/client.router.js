const {CreateClient,deleteClient,getClient,updateClient,deleteclientbyid,getclientbyid}=require("./client.controller");
const router = require("express").Router();

router.post("/createCl",
    
  CreateClient);

router.get("/getCl",getClient);
router.patch("/updateCl",updateClient);
router.delete("/deleteCl",deleteClient);
router.get("/:id", getclientbyid);
router.delete("/:id", deleteclientbyid);
module.exports=router;