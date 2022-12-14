const Admin = require('../models/admin.js');
const User = require('../models/user.js');

exports.getAdmin = async (req, res, next) => {
    const name = req.query.name;
    const admin = await Admin.find();
    if (name) {
        const result = admin.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()))
        result.length
            ? res.status(200).send(result)
            : res.status(404).send("admin no encontrado")

    } else {
        res.status(200).send(admin)

    }
};
exports.delAdmin = async (req, res, next) => {
    const idDelet = req.params.id
    const adminDelet = await User.deleteOne({
        _id: idDelet,
    })
    if (adminDelet) {
        res.status(200).send("borrado")
    } else {
        res.status(404).send("no borrado")
    }

}


exports.putAdmin = async (req, res) => {
    const idadmin = req.params.id; //Solicito el id por params
    try {
        const usuario = await User.updateOne({
           isAdmin:"true",
           isBan:"true"
        });
        console.log(usuario);
      
        res.status(201).json({
            success: true,
            usuario,
        });
    } catch (e) {
        return res.status(500).send('Debe ingresar un ID valido'); // en caso de que no pueda entrar a la db
    }
};
