module.exports = app => {
    const controlador = require('../controllers/controllers.js')

    app.route('/')
        .get(controlador.listarUsuarios)

    app.route('/usuario')
        .post(controlador.inserirUsuario)
        .delete(controlador.deletarUsuario)
        .put(controlador.editarUsuario)
}