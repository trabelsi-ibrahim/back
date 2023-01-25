const pool = require("../../config/database");



module.exports={
    createPis:(data,callback)=>{
        pool.query('SELECT * FROM agence WHERE nom = ?', [data.nom], (err, result) => {
            if (err) {
              return callBack(err);
            }
            if (result.length > 0) {
              return callBack(null, {
                success: 0,
                message: "Agence already exists"
              });
            }
        const sqlInsert="INSERT INTO piste_cyclable (id,nom,ville,description) VALUES (?,?,?,?);";
        pool.query(sqlInsert,
        [
        data.id,
        data.nom,
        data.ville,
        data.description
        ],(error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        })
    });
    },


    ///////////////////////////////////////////

    getPis:callback=>{
        pool.query("SELECT * FROM piste_cyclable",
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
    updatePis:(data,callback)=>{
        pool.query("UPDATE piste_cyclable SET nom= ? WHERE id= ?",
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
    deletePis:(data,callback)=>{
        pool.query("delete from piste_cyclable where id=?",
        [data.id],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }

        )
    },
   getpistebyid : (id, callBack) => {
        pool.query(
          'SELECT * FROM piste_cyclable WHERE id = ?',
          [id],
          (error, results) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      
       deletepistebyid : (id, callBack) => {
        pool.query(
          'SELECT * FROM piste_cyclable WHERE id = ?',
          [id],
          (err, result) => {
            if (err) {
              return callBack(err);
            }
            if (result.length > 0) {
              pool.query(
                'DELETE FROM piste_cyclable WHERE id = ?',
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
                message: "piste not found"
              });
            }
          }
        );
      },
      
      createpiste : (data, callBack) => {
        pool.query(
          'SELECT * FROM piste_cyclable WHERE (nom = ?)',
          [data.nom],
          (err, result) => {
            if (err) {
              return callBack(err);
            }
            if (result.length > 0) {
              return callBack(null, {
                success: 0,
                message: "piste already exists"
              });
            } else {
              pool.query(
                'INSERT INTO piste SET ?',
                data,
                (error, results) => {
                  if (error) {
                    return callBack(error);
                  }
                  return callBack(null, results);
                }
              );
            }
          }
        )

}
}

