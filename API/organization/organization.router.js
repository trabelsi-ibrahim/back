const {CreateOrganization,deleteOrganiation,getOrganization,updateOrganization,deleteclubbyid,getclubbyid}=require("./organization.controller");
const router = require("express").Router();

router.post("/createOrg",CreateOrganization);
router.get("/getOrg",getOrganization);
router.patch("/updateOrg",updateOrganization);
router.delete("/deleteOrg",deleteOrganiation);
router.get("/:id", getclubbyid);
router.delete("/:id", deleteclubbyid);
module.exports=router;