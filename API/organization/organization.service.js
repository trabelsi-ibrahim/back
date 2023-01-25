const pool = require("../../config/database");


module.exports={
    createO:(data,callback)=>{
        pool.query('SELECT * FROM organization WHERE id = ?', [data.id], (err, result) => {
            if (err) {
              return callBack(err);
            }
            if (result.length > 0) {
              return callBack(null, {
                success: 0,
                message: "club already exists"
              });
            }
        pool.query("INSERT INTO organization (id,nom,description,adresse,photo) VALUES (?,?,?,?,?)",
        [
        data.id,
        data.nom,
        data.description,
        data.adresse,
        data.photo
        
        ],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }); });
    },


    ///////////////////////////////////////////

    getOrg:callback=>{
        pool.query("SELECT * FROM organization",
        [],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }


        )
    },

    ///////////////////////////////////////////
    //suppose update nom by id
    updateOrg:(data,callback)=>{
        pool.query("UPDATE organization SET nom= ? WHERE id= ?",
        [data.nom,
        data.id],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }
        )
    },


    ////////////////////////////////////////////////
                                        
    //suppose delete by id 
    deleteOrg:(data,callback)=>{
        pool.query("delete from organization where id=?",
        [data.id],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }

        )
    },

     getclubbyid : (id, callBack) => {
        pool.query(
          'SELECT * FROM organization WHERE id = ?',
          [id],
          (error, results) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      
       deleteclubbyid : (id, callBack) => {
        pool.query(
          'SELECT * FROM organization WHERE id = ?',
          [id],
          (err, result) => {
            if (err) {
              return callBack(err);
            }
            if (result.length > 0) {
              pool.query(
                'DELETE FROM organization WHERE id = ?',
                [id],
                (error, results) => {
                  if (error) {
                    return callBack(error);
                  }
                  return callBack(null, results[0]);
                }
              );
            } else {
              return callBack(null, {
                success: 0,
                message: "club not found"
              });
            }
          }
        );
      }
}