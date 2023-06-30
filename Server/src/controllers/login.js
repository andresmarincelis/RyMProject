const users = require('../utils/users');

const login = (req, res) => {
    const { email, password } = req.query
    const encontrado = users.find((user) => user.email === email &&
        user.password === password)

    if (encontrado) return res.status(200).json({ access: true })
    return res.status(404).json({ access: false })
   
    }

    //otra opcion: (supuestamente es mejor empezar a ocupar esto, los else son mala practica)
    //return encontrado
    //? res.status(200).json({ access: true })
    //: res.status(404).json({ access: false })


module.exports = {
    login
};