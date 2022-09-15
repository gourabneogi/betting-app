const sequelize = require('sequelize');
const db = require('../../database/db_config/db.connect');

var blockUserLoggingModel = require("../../database/models/user_block_logging_table")(db, sequelize.DataTypes);
var userModel = require("../../database/models/user_block_logging_table")(db, sequelize.DataTypes);

exports.create = async (req,res,next)=>{
    var userBlockLogging = await blockUserLoggingModel.create({
        userID: req.body.data.userID,
        profileBlock: req.body.data.profileBlock ?? false,
        bettingBlock: req.body.data.bettingBlock ?? false,
    })
    return next();
}

exports.update = async (req,res,next)=>{
    var userBlockLogging = await blockUserLoggingModel.create({
        userID: req.body.data.userID,
        profileBlock: req.body.data.profileBlock,
        bettingBlock: req.body.data.bettingBlock ?? false,
    },{where: {userId: req.body.data.userId}})

    return next();
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
            var blockUserLogging = await blockUserLoggingModel.findAll({raw: true, where: {
                userID: childID,
            },
            order: [["updateAt", "DESC"], ["createAt", "DESC"]]
            })
            return res.status(200).send(blockUserLogging)
        } else {
            throw new Error({message: "no user to show"})
        }
    } catch(err){
        return res.status(401).send(err.message)
    }
}