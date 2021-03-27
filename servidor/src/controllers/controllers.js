const Usuario = require('../models').Usuario

exports.listarUsuarios = (req, res) => {
    Usuario.findAll().then(response => {
        res.send(response)
    }).catch(error => {
        console.log(error)
    })
}

exports.inserirUsuario = (req, res) => {
    let {nome, email} = req.body

    Usuario.create({
        nome,
        email
    }).then(response => {
        res.send(response)
    }).catch(error => {
        console.log(error)
    })
}

exports.deletarUsuario = (req, res) => {
    let {id} = req.body

    Usuario.destroy({
        where: {id}
    }).then(response => {
        res.json(response)
    }).catch(error => {
        console.log(error)
    })
}

exports.editarUsuario = (req, res) => {
    let {id, nome, email} = req.body

    Usuario.update({nome, email}, {
        where:{id: id}
    }).then(response => {
        res.json(response)
    }).catch(error => {
        console.log(error)
    })
}