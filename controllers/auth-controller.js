const bcrypt = require('bcryptjs');
const db = require('../models/db');

module.exports.register = (req, res, next) => {
   try{
    const {username, password, confirmPassword, email} = req.body;

    if( !(username && password && confirmPassword && email )){
        return next( new Error('กรุณากรอกข้อมูลให้ครบ'))
    }
    if(confirmPassword === password){
        throw new Error('ยืนยันรหัสผ่านอีกครั้ง')
    }

    const data = {
        username,
        password: bcrypt.hashSync(password, 10),
        email
    }

    db.user.create({data})

    res.send('in register...');
   }catch(err){
    console.log(err)
    next(err)
    res.status(404).json({ msg: " Error Code", err})
   }
};

module.exports.login = (req, res, next) => {
    res.send('in login...');
};

