const sequelize = require('sequelize');
const { Op } = require("sequelize");
const db = require('../../database/db_config/db.connect');

var userModel = require("../../database/models/user_table")(db, sequelize.DataTypes);
var commissionModel = require("../../database/models/commission_table")(db, sequelize.DataTypes);
var paymentModel = require("../../database/models/payment_table")(db, sequelize.DataTypes);

const createId = (userCount, role)=>{
    var currentdate = new Date()
    var id = `BTAP${currentdate.getDay()} + ${currentdate.getMonth()} + ${currentdate.getFullYear()} + ${currentdate.getHours()} + ${currentdate.getMinutes()} + ${currentdate.getSeconds()}`
    if(userCount < 10) {
        id = id + "000" + (userCount+1)
    } else if(userCount > 99 && userCount < 100) {
        id = id + "00" + (userCount+1)
    }else if(userCount > 999 && userCount < 1000) {
        id = id + "0" + (userCount+1)
    }else {
        id = id + (userCount+1)
    }
    return(id.toUpperCase())
}

const makeStr = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

exports.createUser = async(req, res, next)=>{
    const userList = await userModel.findAll({raw:true})
    const userId = createId(userList.length, req.body.data.role.id)
    const password = makeStr(15)
    try{
        var userCreate = await userModel.create({
            userID: userId,
            name: req.body.data.name,
            roleID: req.body.data.role.id,
            token: req.body.data.token,
            maxShare: req.body.data.maxShare,
            myShare: req.body.data.myShare,
            password: req.body.data.passsword ?? password,
            email: req.body.data.email,
        })
        var userPayment = await paymentModel.create({
            userID: userId,
            credit: req.body.data.credit ?? 0,
            debit: req.body.data.debit ?? 0,
            allClear: req.body.data.allClear ?? 0,
        })
        if(req.body.data.role.id < 7) {
            var userCommission = await commissionModel.create({
                userID: userId,
                matchCommission: req.body.data.matchCommission,
                sessionCommission: req.body.data.sessionCommission,
                currentLimit: req.body.data.currentLimit ?? 1000,
                usedLimit: req.body.data.usedLimit ?? 0,
            })
        }
        return next();
    }
    catch{
        return res.status(401).send({message: "unable to create the user"})
    }
}

exports.update = async(req, res, next)=>{
    var userCreate = await userModel.update({
        userID: req.body.data.userID,
        name: req.body.data.name,
        roleID: req.body.data.role.id,
        token: req.body.data.token,
        maxShare: req.body.data.maxShare,
        myShare: req.body.data.myShare,
        password: req.body.data.passsword,
        email: req.body.data.email,
    }, {where: {userId: req.body.data.userId}})

    return next()
}

exports.viewAllUser = async(req, res, next)=>{
    try{
        const allusers = await userModel.findAll({raw:true, where:{
            roleID: {[Op.gt]: req.body.role.id}
        }, order: [["updateAt", "DESC"], ["createAt", "DESC"]]})
        return res.status(200).send(allusers)
    } catch(err){
        return res.status(401).send(err.message)
    }
}

exports.delete = async(req, res, next)=>{
    const user = await userModel.update({status: false}, {where: {userId: req.body.data.userId}})
    return next()
}