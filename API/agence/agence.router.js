const{  createagence,getagence,updateagence,deleteagence,deleteagencebyid,getagencebyid,createagence2}= require("./agence.controller");
const router = require("express").Router();

router.post("/createAg" ,createagence);
router.patch("/updateAg",updateagence);

router.get("/getAg",getagence);



router.delete("/deleteAg",deleteagence);
router.delete("/:id", deleteagencebyid);
router.get("/getAg/:id", getagencebyid);
router.post("/createAg2" ,createagence2);
module.exports=router;