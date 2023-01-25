const {createPis,deletePis,updatePis,getPis,createpiste,deletepistebyid,getpistebyid} = require("./pisteCycl.service");

module.exports={
    CreatePiste:(req,res)=>{
        const body =req.body;
        createPis(body,(err,result)=>{
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
    
    getPiste:(req,res)=>{
        getPis((err,result)=>{
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
    updatePiste:(req,res)=>{
        const body =req.body;
        updatePis(body,(err,result)=>{
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
    deletePiste:(req,res)=>{
        const data = req.body;
        deletePis(data,(err,result)=>{
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
 getpistebyid : (req, res) => {
        const id = req.params.id;
        getpistebyid(id, (err, results) => {
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
     deletepistebyid : (req, res) => {
        const id = req.params.id;
        deletepistebyid(id, (err, results) => {
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
                message: "piste deleted successfully"
            });
        });
    },
    
     createpiste : (req, res) => {
        const body = req.body;
        createpiste(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to create piste"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        })
}}
