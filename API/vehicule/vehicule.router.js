const {CreateVehicule,deleteVehicule,getVehicule,updateVehicule,deletevehiculebyid,getvehiculebyid}=require("./vehicule.controller");
const router = require("express").Router();

router.post("/createVeh",CreateVehicule);
router.get("/getVeh",getVehicule);
router.patch("/updateVeh",updateVehicule);
router.delete("/deleteVeh",deleteVehicule);
router.get('/:id', getvehiculebyid);
router.delete('/:id', deletevehiculebyid);

module.exports=router;