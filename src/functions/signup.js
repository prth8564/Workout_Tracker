// import { sign } from 'jsonwebtoken';
const { sign } = require('jsonwebtoken');


//import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');
//import { insertUsers } from "../database/operations.js";
const {insertUsers} = require("../database/operations");
async function signup(req,res){
    const {name,email,password}  = req.body;
    await bcrypt.hash(password,10,(err,hash) =>{
        insertUsers(name,email,hash);
    });
    res.status(200).json({"status":"done"});
}
module.exports = {signup};