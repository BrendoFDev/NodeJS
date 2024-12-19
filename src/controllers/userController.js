const userModel = require("../models/userModel");

userModel.create({
    nome:'Luan',
    idade:30,
    cpf:'123.123.123-25',
})
.then(data => console.log(data))
.catch(e => console.log(e));

exports.cadUser = (req,res) =>
{
    res.render('index');
    return;
}

exports.receiveUser = (req,res) => {
    res.render('index');
    console.log('recebendo user');
    return;
}