// Classe Pessoa
class Pessoa {
    constructor() {
        this.listaPessoa = [];
    }

    addPessoa(nomeCompleto, nomeUsuario, emailUsuario, senhaUsuario, dataNascimentoUsuario) {
        let pessoa = {
            nomeCompleto: nomeCompleto,
            nomeUsuario: nomeUsuario,
            emailUsuario: emailUsuario,
            senhaUsuario: senhaUsuario,
            dataNascimentoUsuario: dataNascimentoUsuario
        };

        this.listaPessoa.push(pessoa);
    }

    mostraPessoas(){
        console.log(this.listaPessoa)
    }
    validaLogin(loginUsuario, senhaUsuario) {
       
        const pessoaEncontrada = this.listaPessoa.find(element => 
            (element.nomeUsuario === loginUsuario || element.emailUsuario === loginUsuario) && 
            element.senhaUsuario === senhaUsuario
        );
    

        return pessoaEncontrada !== undefined;
    }
    

}


const pessoa = new Pessoa();
// Cadastro
let botaoCadastro = document.querySelector('#botaoCadastro')

let containerLogin = document.getElementById('conteinerLogin')
let conteinerCadastro = document.getElementById('conteinerCadastro')

botaoCadastro.addEventListener('click', function (cadastro) {
    cadastro.preventDefault()
    console.log("cadastro previnido")

    let nomeCadastro = document.getElementById("nomeCompletoCadastro")
    let usuarioCadastro = document.getElementById("nomeUsuarioCadastro")
    let emailCadastro = document.getElementById("emailUsuarioCadastro")
    let senhaCadastro = document.getElementById("senhaUsuarioCadastro")
    let dataNascimentoCadastro = document.getElementById("dataNascimentoCadastro")

    if (!nomeCadastro.value || !usuarioCadastro.value  || !emailCadastro.value  || !senhaCadastro.value  || !dataNascimentoCadastro.value ) {
        alert("Preencha todos os campos")
        return;
    }

    pessoa.addPessoa(nomeCadastro.value , usuarioCadastro.value , emailCadastro.value , senhaCadastro.value , dataNascimentoCadastro.value )

    alert("usuario cadastrado com sucesso !")

    pessoa.mostraPessoas();

    containerLogin.style.display = 'block'
    conteinerCadastro.style.display = 'none'
    let nomeCadastro2 = document.getElementById("nomeCompletoCadastro").value = ''
    let usuarioCadastro2 = document.getElementById("nomeUsuarioCadastro").value = ''
    let emailCadastro2 = document.getElementById("emailUsuarioCadastro").value = ''
    let senhaCadastro2 = document.getElementById("senhaUsuarioCadastro").value = ''
    let dataNascimentoCadastro2= document.getElementById("dataNascimentoCadastro").value = ''

})


let botaoVoltarCadastro = document.getElementById('voltarCadastro')

botaoVoltarCadastro.addEventListener('click', function (e) {

    containerLogin.style.display = 'block'
    conteinerCadastro.style.display = 'none'
    
})

// login

let botaoLogin = document.querySelector("#botaoLogin")

botaoLogin.addEventListener('click', function (login) {
    login.preventDefault();
    console.log("login previnido")

    let emailOUuserLogin = document.getElementById('emailUserLogin').value  
    let senhaLogin = document.getElementById('senhaLogin').value

    if (pessoa.validaLogin(emailOUuserLogin, senhaLogin) === true) {

        alert('login efetuado com sucesso !')
        
    }else{
        alert('Login ou senha incorretos !')
    }

})

let botaoVoltarLogin = document.querySelector('#voltarLogin')

botaoVoltarLogin.addEventListener('click', function (voltarLogin) {

    containerLogin.style.display = 'none'
    conteinerCadastro.style.display = 'block'

})

