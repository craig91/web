import * as dotenv from 'dotenv'
dotenv.config()
import express, { Request, response, Response } from 'express';
import cors from 'cors';
import { sqlConnect, sequelize } from './sequelizeConnect';
import { User } from './user.model';
import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';




sqlConnect();


const app = express()
app.use(cors())
app.use(express.json());

// app.get('/', (req:Request, res:Response)=> {
//     res.send("hello")
// })


app.post('/signUp', async (req, res) => {
    await sequelize.sync()
    const userExists = await User.findOne({where:{email:req.body.email}})
    if (userExists){ return res.status(500).json({error: "User already exists"})} 
    const encryptPassword = await bycrypt.hash(req.body.password, 10)
    const user = await User.create({email:req.body.email, password:encryptPassword})
    const token = jwt.sign({user: user}, process.env.TOKEN_KEY || '', {expiresIn: "2h"});
    console.log(req.body)
    res.json(token)
    
})





app.listen('8080', () => {
    console.log("running.....")
})
console.log("HERE", process.env.TOKEN_KEY)
