const bcrypt = require('bcryptjs');
const db = require('../models/db');

module.exports.register = async (req, res, next) => {
   try{
    const {username, password, confirmPassword, email, phone, role, image} = req.body;
    console.log(username, password, confirmPassword, email);
    if( !(username && password && confirmPassword && email )){
        
        return next( new Error('กรุณากรอกข้อมูลให้ครบ'))
    }
    if(confirmPassword !== password){
        throw new Error('ยืนยันรหัสผ่านอีกครั้ง')
    }

    const data = {
        username,
        password: bcrypt.hashSync(password, 10),
        email,
        phone: "0641121213",
        role: "User",
        image: "iii"
    }

    const user = await db.user.create({ data });

    res.status(201).json({ message: 'User registered successfully', user });
   }catch(err){
    console.log(err)
    next(err)
    res.status(404).json({ msg: " Error Code", err})
   }
};

module.exports.login = (req, res, next) => {
    res.send('in login...');
};

module.exports.me = async (req, res, next) => {
    try{
        const user = await db.user.findMany()
        res.json(user)
        console.log(user)
        res.send("bnnnnnnn")
    }catch(err){
        next(err)
    }
}

