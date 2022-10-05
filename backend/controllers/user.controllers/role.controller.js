const sequelize = require('sequelize');
const db = require('../../database/db_config/db.connect');

var roleModel = require("../../database/models/role_table");
roleModel = roleModel(db, sequelize.DataTypes);

exports.read = async (req,res,next)=>{
    try{
        const allusers = await roleModel.findAll({raw:true, where:{
            roleID: { [ Op.gt ]: req.body.role.id },
            active: true
        }, order: [["updateAt", "DESC"], ["createAt", "DESC"]]})
        return res.status(200).send(allusers)
    } catch(err){
        return res.status(401).send(err.message)
    }
}