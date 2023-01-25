const {createLoc,deleteLoc,updateLoc,getLoc,createlocation,deletelocationbyid,getlocationbyid,getClientLocations,getagenceLocations,getpisteLocations} = require("./location.service");

module.exports={
    
    CreateLocation:(req,res)=>{
        const body =req.body;
        createLoc(body,(err,result)=>{
            if (err ){
                console.log(err);
                return res.status(500).json({
                    succes :0,
                    message: "database connection error insert "
                });
            }
            if(result.length>0){res.redirect("/apiEnCasDeSucces");}
            else {res.redirect("/");}
            
            return res.status(200).json({
                succes :1 ,
                message : result
            })
        })
    },
    /////////////////////////////////////////
    getLocation:(req,res)=>{
        getLoc((err,result)=>{
            if (err ){
                console.log(err);
                return ;
            }
            return res.status(200).json({
                succes :1 ,
                message : result
            })

        })
    },
    ////////////////////////////////////////
    updateLocation:(req,res)=>{
        const body =req.body;
        updateLoc(body,(err,result)=>{
            if (err ){
                console.log(err);
                return ;
                
            }
            return res.json({
                succes :1 ,
                message : "updated succeffully"
            });
        });
    },

    /////////////////////////////////////////
    deleteLocation:(req,res)=>{
        const data = req.body;
        deleteLoc(data,(err,result)=>{
            if (err ){
                console.log(err);
                return ;
                
            }
            if(!result){
                return res.json({
                    succes :0 ,
                    message : "record not found"
                });

            }
            return res.json({
                succes :1 ,
                message : "succeffully deleted record"
            });

        })
    },
     getlocationbyid : (req, res) => {
        const email = req.params.email;
        getlocationbyid(email, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
     deletelocationbyid : (req, res) => {
        const id = req.params.id;
        deletelocationbyid(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                message: "location deleted successfully"
            });
        });
    },
    
    createlocation : (req, res) => {
        const body = req.body;
        createlocation(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to create location"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
     getClientLocations : (req, res) => {
        const id_client = req.params.id_client;
        getClientLocations(id_client, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getagenceLocations : (req, res) => {
        const id_agence = req.params.id_agence;
        getagenceLocations(id_agence, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getpisteLocations : (req, res) => {
        const id_piste = req.params.id_piste;
        getpisteLocations(id_piste, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
}