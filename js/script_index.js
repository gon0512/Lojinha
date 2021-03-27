$(document).ready(() => {
    console.log('Funcionou!')
})

document.getElementById('btnCadastrar').addEventListener('click', function inserirUsuario(e) {
    e.preventDefault()
    let validacao = validarCampos()

    if(validacao) {
        let nome = $('#nome').val()
        let email = $('#email').val()

        axios.post('http://localhost:3000/usuario', {nome, email})
            .then(response => {
                swal("Tudo certo!", "Usuário cadastrado com sucesso!", "success")
            
                $('#nome').val('')
                $('#email').val('')
            })
            .catch(error => {
                console.log(error)
            })
    }
})

function validarCampos() {
    let nome = $('#nome').val()
    let email = $('#email').val()

    if(nome == '' || email == '') {
        swal("Opa!", "Os campos precisam estar preenchidos...", "error")
        return false
    }
    else {
        return true
    }
}