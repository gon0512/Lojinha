function efetuarLogin(e) {
    e.preventDefault()
    let username = document.getElementById('username').value
    let senha = document.getElementById('senha').value

    if(username === 'teste' && senha === '12345') {
        window.open('./index.html', '_self')
    }
    else {
        swal('Opa!','Erro ao efetuar login', 'error')
    }
}

document.getElementById('btnLogin').addEventListener('click', efetuarLogin)