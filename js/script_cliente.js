$(document).ready(() => {
    console.log('Funcionou!')
    listarUsuarios()

    $('.table').on('click', '.btnDeletar', event => {
        let botao = event.target.value
        $(this).closest('tr').remove()
        deletarUsuario(botao)
    })

    $('#salvarUsuario').on('click', event => {
        event.preventDefault()
        console.log('chegou aqui tb')
        editarUsuario()
    })

    $('#sair').on('click', event => {
        event.preventDefault()
        console.log('cheguei aqui')
        efetuarLogout()
    })

})

function listarUsuarios() {
    axios.get('http://localhost:3000/')
        .then(response => {
            response.data.forEach(item => {
                let html = `<tr><td>${item.nome}</td><td>${item.email}</td><div class="row"><div class="col-6"><td><button type="button" class="btn btn-danger bg-danger btnDeletar" value="${item.id}">X</button></td></div><div class="col-6"><td><button type="button" class="btn btn-secondary bg-secondary btnEditar" data-bs-toggle="modal" data-bs-target="#modalEditar" value="${item.id}" onclick="abrirModal(${item.id}, '${item.nome}', '${item.email}')">Editar</button></td></div></div></tr>`
                $('#tabela tbody').append(html)
            })
        })
        .catch(error => {
            console.log(error)
        })
}

function deletarUsuario(botao) {
    let id = botao
    
    swal({
        title: "Você está certo disso?",
        text: "Uma vez deletado, o cliente não poderá ser recuperado",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Feito! O cliente foi deletado com sucesso!", {
                icon: "success",
                });
                axios.delete('http://localhost:3000/usuario', {data: {id: id}})
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                $('#tabela tbody').empty()
                listarUsuarios()
            }
            else {
                swal("Você cancelou essa ação!");
            }
        })
}

function abrirModal(id, nome, email) {
    $('#id').val(id)
    $('#nome').val(nome)
    $('#email').val(email)
    $('#modalEditar').modal('show')
}

function editarUsuario() {
    let id = $('#id').val()
    let nome = $('#nome').val()
    let email = $('#email').val()

    let objeto = {
        id,
        nome,
        email
    }

    axios.put('http://localhost:3000/usuario', {id, nome, email})
        .then(response => {
            
        })
        .catch(error => {
            console.log(error)
        })
        swal("Feito! Os dados do cliente foram editados com sucesso!", {
            icon: "success",
            });
        $('#tabela tbody').empty()
        listarUsuarios()
        $('#modalEditar').modal('hide')
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