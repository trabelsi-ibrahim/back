const pool=require("../../config/database");
module.exports={

//insertion des elements dans la base de donné
    createevenement:(data,callBack)=>
    {pool.query('SELECT * FROM evenement WHERE id = ?', [data.id], (err, result) => {
        if (err) {
          return callBack(err);
        }
        if (result.length > 0) {
          return callBack(null, {
            success: 0,
            message: "Evenement already exists"
          });
        }
        pool.query(

            "insert into evenement(id,id_organization ,id_piste,date ,heure,adresse,description,image)values(?,?,?,?,?,?,?,?)",[data.id,data.id_organization ,data.id_piste,data.date ,data.heure,data.adresse,data.description,data.image],(error,results,fields)=>
            {
                if(error)
                {
                    return callBack(error)
                }
                return callBack(null,results)
            }

        );}
    );
    },

//obtention des donner de la base de donné
getevenement:callBack=>
{
    pool.query(
"select * from evenement ",[],(erreur,results,fields)=>
{
    if(erreur)
    {
       return callBack(erreur);

    }
    return callBack(null,results);
}
    );
},
getevenementById:(id,callBack)=>
{

    pool.query(
        "select * from evenement where id=?",[id],(erreur,results,fields)=>
        {
            if(erreur)
            {
               return callBack(erreur);
        
            }
            return callBack(null,results[0]);
        }
            );
},
//modification de titre selon l'id
updateevenement:(data,callBack)=>
{
    pool.query
    (" UPDATE evenement SET id_organization=? ,id_piste=?,date=? ,heure=?,adresse=?,description=? WHERE  id=?",
    [data.id_organization ,data.id_piste,data.date ,data.heure,data.adresse,data.description,data.id],
       
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
deleteevenement:(data,callBack)=>{
    pool.query
    (
        'delete from evenement where id=?',[data.id],(error,results,fields)=>
        {
            if(error)
            {
                return callBack(error);
            }
            return callBack(null,results[0]);
        }
    )
    

},
 deleteeventbyid : (id, callBack) => {
    pool.query(
      'SELECT * FROM evenement WHERE id = ?',
      [id],
      (err, result) => {
        if (err) {
          return callBack(err);
        }
        if (result.length > 0) {
          pool.query(
            'DELETE FROM evenement WHERE id = ?',
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
            message: "event not found"
          });
        }
      }
    );
  },
}
