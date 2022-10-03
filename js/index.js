import usuarios from "./moduloDados.js"

const btnEntrar = document.querySelector('#btnEntrar')
const alertaLoginUsuario = new bootstrap.Modal("#alertaLogin")
const alertaLoginSenha = new bootstrap.Modal("#alertaLogin2")

btnEntrar.addEventListener('click', () => {
    const inputLogin = document.getElementById("login").value
    const inputSenha = document.getElementById("senha").value

    let usuarioValido;
    
    for(let usuario of usuarios){
        if(usuario.nomeUsuario == inputLogin){
            usuarioValido = usuario;
            if(inputSenha == usuarioValido.senha){
                window.location.pathname = '/app.html' 
            }else{
                alertaLoginSenha.show()
            }
        }else{
            alertaLoginUsuario.show()
        }

    }
    
})