const pool = require("../../config/database");



module.exports={
    createLoc:(data,callback)=>{
         //le data est le body passeer du front 
        const sqlInsert="INSERT INTO location (cin,id_vehicule,id_agence,date,periode) VALUES (?,?,?,?,?);";
        pool.query(sqlInsert,
        [
        data.cin,
        data.id_vehicule,
        data.id_agence,
        data.date,
        data.periode
        ],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        })
    },


    ///////////////////////////////////////////

    getLoc:callback=>{
        pool.query("SELECT * FROM location",
        [],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }


        )
    },

    ///////////////////////////////////////////
    //suppose update id_vehicule by cin
    updateLoc:(data,callback)=>{
        pool.query("UPDATE location SET id_vehicule= ? WHERE cin= ?",
        [data.id_vehicule,
        data.cin],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }
        )
    },


    ////////////////////////////////////////////////
    
    //suppose delete by cin 
    deleteLoc:(data,callback)=>{
        pool.query("delete from location where cin=?",
        [data.cin],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }

        )
    },

     getlocationbyid : (email, callBack) => {
        pool.query(
          'SELECT * FROM location WHERE email = ?',
          [email],
          (error, results) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getlocationbyid2 : (email, callBack) => {
        pool.query(
          'SELECT * FROM location WHERE email = ?',
          [email],
          (error, results) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      
      deletelocationbyid : (id, callBack) => {
        pool.query(
          'SELECT * FROM location WHERE id = ?',
          [id],
          (err, result) => {
            if (err) {
              return callBack(err);
            }
            if (result.length > 0) {
              pool.query(
                'DELETE FROM location WHERE id = ?',
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
                message: "location not found"
              });
            }
          }
        );
      },
      
      createlocation : (data, callBack) => {
        pool.query(
          'SELECT * FROM location WHERE (matricule = ?)AND(datedebut=?)AND(datefin=?)',
          [data.matricule,data.datedebut,data.datefin],
          (err, result) => {
            if (err) {
              return callBack(err);
            }
            if (result.length > 0) {
              return callBack(null, {
                success: 0,
                message: "location already exists"
              });
            } else {
              pool.query(
                'INSERT INTO location SET ?',
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
        );
      },
       getClientLocations : (id_client, callBack) => {
        pool.query(
          `SELECT location.*, client.*, vehicule.*
          FROM location
          JOIN client ON location.email = client.email AND client.id = ?
          JOIN vehicule ON location.id_vehicule = vehicule.id`,
          [id_client],
          (error, results) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      getagenceLocations : (id_agence, callBack) => {
        pool.query(
          `SELECT location.*, agence.*, vehicule.*
          FROM location
          JOIN agence ON  agence.id_agence = ?
          JOIN vehicule ON location.id_vehicule = vehicule.id`,
          [id_agence],
          (error, results) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
        
      },
      getpisteLocations : (id_piste, callBack) => {
        pool.query(
          `SELECT location.*, piste_cyclable.*, vehicule.*
          FROM location
          JOIN piste_cyclable ON  piste_cyclable.id = ?
          JOIN vehicule ON location.id_vehicule = vehicule.id`,
          [id_piste],
          (error, results) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
}