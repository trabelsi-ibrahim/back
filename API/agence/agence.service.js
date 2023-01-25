const pool = require("../../config/database");
module.exports={

//insertion des elements dans la base de donné
    createagence:(data,callBack)=>
    { pool.query('SELECT * FROM agence WHERE nom = ?', [data.nom], (err, result) => {
        if (err) {
          return callBack(err);
        }
        if (result.length > 0) {
          return callBack(null, {
            success: 0,
            message: "Agence already exists"
          });
        }
        pool.query(

            "insert into agence(id_agence,nom,adresse,description,photo,email,website)values(?,?,?,?,?,?,?)",[data.id_agence,data.nom,data.adresse,data.description,data.photo,data.email,data.website,],(error,results,fields)=>
            {
                if(error)
                {
                    return callBack(error)
                }
                return callBack(null,results)
            }

          );
        });
    },

//obtention des donner de la base de donné
getagence:callBack=>
{
    pool.query(
"select * from agence ",[],(erreur,results,fields)=>
{
    if(erreur)
    {
       return callBack(erreur);

    }
    return callBack(null,results);
}
    );
},

//modification de titre selon l'id
updateagence:(data,callBack)=>
{
    pool.query
    (" UPDATE agence SET adresse=?,description=?,photo=?,email=?,website=? WHERE  nom=?",
    [data.adresse,data.description,data.photo,data.email,data.website,data.nom ],
       
        (erreur,results,fields)=>
        {
            if(erreur)
            {
               return callBack(erreur);
        
            }
            return callBack(null,results);
        }
            );
    
},
deleteagence:(id,callBack)=>{
    pool.query
    (
        'delete from agence where id=?',[id],(error,results,fields)=>
        {
            if(error)
            {
                return callBack(error);
            }
            return callBack(null,results[0]);
        }
    )
    

},
 deleteagencebyid : (id, callBack) => {
    pool.query(
      'DELETE FROM agence WHERE id_agence = ?',
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
   getagencebyid : (id, callBack) => {
    pool.query(
      'SELECT * FROM agence WHERE id_agence = ?',
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  createagence2 : (agence, callBack) => {
    pool.query('SELECT * FROM agence WHERE nom = ?', [agence.nom], (err, result) => {
      if (err) {
        return callBack(err);
      }
      if (result.length > 0) {
        return callBack(null, {
          success: 0,
          message: "Agence already exists"
        });
      }
      pool.query(
        'INSERT INTO agence SET ?',
        agence,
        (error, results) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, {
            success: 1,
            message: "Agence created successfully"
          });
        }
      );
    });
  },
  
}
