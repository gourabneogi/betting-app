const sequelize = require('sequelize');
const db = require('../../database/db_config/db.connect');

var commissionModel = require("../../database/models/commission_table")(db, sequelize.DataTypes);
var userModel = require("../../database/models/user_table")(db, sequelize.DataTypes);

exports.update = async (req,res,next)=>{
    var userCommission = await commissionModel.create({
        userID: req.body.data.userID,
        credit: req.body.data.credit,
        debit: req.body.data.debit,
        allClear: req.body.data.allClear,
    },{where: {userId: req.body.data.userId}})

    return next()
}

exports.read = async (req,res,next)=>{
    try{
        const user = await userModel.findAll({raw: true, where:{
            roleID: {[Op.gt]: req.body.role.id}, active: true
        }, attributes: ["userID"], 
        order: [["updateAt", "DESC"], ["createAt", "DESC"]]})
        if(user.length > 0) {
            var childID = []
            user.forEach((element) => {
                childID.push(element.userID)
            });
            var commission = await commissionModel.findAll({raw: true, where: {
                userID: childID,
            },
            order: [["updateAt", "DESC"], ["createAt", "DESC"]]
            })
            return res.status(200).send(commission)
        } else {
            throw new Error({message: "no user to show"})
        }
    } catch(err){
        return res.status(401).send(err.message)
    }
}