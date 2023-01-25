const {createO,deleteOrg,updateOrg,getOrg,deleteclubbyid,getclubbyid} = require("./organization.service");

module.exports={
    CreateOrganization:(req,res)=>{
        const body =req.body;
        createO(body,(err,result)=>{
            if (err ){
                console.log(err);
                return res.status(500).json({
                    succes :0,
                    message: "database connection error insert "
                });
            }
            return res.status(200).json({
                succes :1 ,
                message : result
            })
        })
    },
    /////////////////////////////////////////
    getOrganization:(req,res)=>{
        getOrg((err,result)=>{
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
    updateOrganization:(req,res)=>{
        const body =req.body;
        updateOrg(body,(err,result)=>{
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
    deleteOrganiation:(req,res)=>{
        const data = req.body;
        deleteOrg(data,(err,result)=>{
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
    getclubbyid: (req, res) => {
        const id = req.params.id;
        getclubbyid(id, (err, results) => {
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
      deleteclubbyid: (req, res) => {
        const id = req.params.id;
        deleteclubbyid(id, (err, results) => {
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
            message: "club deleted successfully"
          });
        });
      },

}
