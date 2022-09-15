const jwt = require("jsonwebtoken");
const sequelize = require('sequelize');
const db = require('../../database/db_config/db.connect');
const userModel = require("../../database/models/user_table")(db, sequelize.DataTypes);
const roleModel = require("../../database/models/role_table")(db, sequelize.DataTypes);

exports.login = async (req, res, next)=>{
    const {userId, password} = req.body
    const user = await userModel.findOne({raw: true, where: { userId : userId } });
    if(user == null){
        return res.status(401).send({message: "authentication failure: Invalid userId"})
    }
    else if (user.password != password){
        return res.status(401).send({message: "authentication failure: Invalid password"})
    }
    else{
        await userModel.update({online: true}, {raw: true, where:{ userId: userId }})
        const role = await roleModel.findOne({raw: true, where:{id: Number(user.role)}})
        user.role = role;
        user.token = jwt.sign({ userId: user.userId, password: user.password, role:{id: user.role.id, name:user.role.name} }, process.env.jwtTokenizer, { expiresIn: process.env.expiresIn })
        return res.status(200).send({data:user})
    }
}
exports.verifyLogin = async (req, res, next)=>{
    const token = req.body.token;
    try {
        const { userId, password } = jwt.verify(token, process.env.jwtTokenizer);
        req.body.userId = userId
        req.body.password = password
        return next();
    }
    catch (err) {
        return res.status(401).send({message: "authentication failure: Invalid Token"});
    }
}

exports.verifyToken = async(req, res, next)=>{
    const token = req.body.token;
    if (!token) {
        return res.status(403).send({message: "authentication failure: A token is required for authentication"});
    }
    try {
        const { userId, role } = jwt.verify(token, process.env.jwtTokenizer);
        if (req.body.userId != userId){
            return res.status(401).send({message: "authentication failure: Invalid Token"});
        }
        else{
            req.body.userId = userId
            req.body.role = role
            return next();
        }
    }
    catch (err) {
        return res.status(401).send({message: "authentication failure: Invalid Token"});
    }
}