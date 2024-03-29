const pool = require("../../config/database");



module.exports={
    create:(data,callback)=>{
        pool.query('SELECT * FROM vehicule WHERE id = ?', [data.id], (err, result) => {
            if (err) {
              return callBack(err);
            }
            if (result.length > 0) {
              return callBack(null, {
                success: 0,
                message: "vehicule already exists"
              });
            }
        const sqlInsert="INSERT INTO vehicule (id_agence,id,type,marque,nom,image,description,prix,couleur,rate,speed) VALUES (?,?,?,?,?,?,?,?,?,?,?);";
        pool.query(sqlInsert,
        [
        data.id_agence,
        data.id,
        data.type,
        data.marque,
        data.nom,
        data.image,
        data.description,
        data.prix,
        data.couleur,
        data.rate,
        data.speed
        ],(error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        })})
    },


    ///////////////////////////////////////////

    getVehic:callback=>{
        pool.query("SELECT * FROM vehicule",
        [],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }


        )
    },

    ///////////////////////////////////////////
    //suppose update nom by id_agence
    updateVeh:(data,callback)=>{
        pool.query("UPDATE vehicule SET nom= ? WHERE id_agence= ?",
        [data.nom,
        data.id_agence],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }
        )
    },


    ////////////////////////////////////////////////
                                    //!!!!!!!!!!!!!!! PAS SUUUUUUUUUUUUR !!!!!!!!!!!!!!
    //suppose delete by name 
    deleteVeh:(data,callback)=>{
        pool.query("delete from vehicule where nom=?",
        [data.nom],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }

        )
    },
     getvehiculebyid : (id, callBack) => {
        pool.query(
          'SELECT * FROM vehicule WHERE id = ?',
          [id],
          (error, results) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      
       deletevehiculebyid : (id, callBack) => {
        pool.query(
          'SELECT * FROM vehicule WHERE id = ?',
          [id],
          (err, result) => {
            if (err) {
              return callBack(err);
            }
            if (result.length > 0) {
              pool.query(
                'DELETE FROM vehicule WHERE id = ?',
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
                message: "vehicule not found"
              });
            }
          }
        );
      },
      


}