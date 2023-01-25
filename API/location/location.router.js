const {CreateLocation,deleteLocation,getLocation,updateLocation,createlocation,deletelocationbyid,getlocationbyid,getClientLocations,getagenceLocations,getpisteLocations}=require("./location.controller");
const router = require("express").Router();

router.post("/createLoc",CreateLocation);
router.get("/getLoc",getLocation);
router.patch("/updateLoc",updateLocation);
router.delete("/deleteLoc",deleteLocation);
router.get('/:email', getlocationbyid);
router.delete('/:id', deletelocationbyid);
router.post('/create', createlocation);
router.get('/client/:id_client', getClientLocations);
router.get('/agence/:id_agence', getagenceLocations);
router.get('/piste/:id_piste',getpisteLocations);
module.exports=router;