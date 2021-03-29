$(document).ready(() => {
    console.log('Funcionou!')

    $('#sair').on('click', event => {
        event.preventDefault()
        console.log('cheguei aqui')
        efetuarLogout()
    })
})

document.getElementById('btnCadastrar').addEventListener('click', function inserirUsuario(e) {
    e.preventDefault()
    let validacao = validarCampos()

    if(validacao) {
        let nome = $('#nome').val()
        let email = $('#email').val()

        axios.post('http://localhost:3000/usuario', {nome, email})
            .then(response => {
                swal("Tudo certo!", "Cliente cadastrado com sucesso!", "success")
            
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

function efetuarLogout() {
    swal({
        title: "Você está certo?",
        text: "Deseja realmente sair do aplicativo?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((logout) => {
        if (logout) {
            location.replace('./login.html')
        } else {
          swal('Você cancelou a ação!')
        }
      });
}