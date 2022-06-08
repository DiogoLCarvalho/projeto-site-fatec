function validar() {
    let nome = contato.name.value
    let cpf = contato.cpf.value
    let email = contato.email.value


    if (nome == ' ') {
        alert('Campo nome é obrigatório');
        contato.nome.focus();
        return false;
    }
    if (cpf == ' ') {
        alert('Campo cpf é obrigatório');
        contato.cpf.focus();
        return false;
    }
    if (email == ' ') {
        alert('Campo email é obrigatório');
        contato.email.focus();
        return false;
    }
    if (telefone == ' ') {
        alert('Campo telefone é obrigatório');
        contato.fone.focus();
        return false;
    }
    if (isNaN(cpf)) {
        alert('Só números no Cpf')
        contato.cpf.focus();
        return false;
    }
    if (cpf.lenght != 11) {
        alert('CPF inválido')
        contato.cpf.focus();
        return false;
    }

    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,10}$/
    //(?=.*?[A-Z]) - mínimo uma letra maiúscula
    //(?=.*?[a-z]) - mínimo uma letra minúscula
    //(?=.*?[0-9]) - mínimo um número
    //(?=.*?[^\w\s]) - mínimo um caractere especial
    //.{6,10} - mínimo 6, máximo 10 caracteres

    if (!regex.exec(senha)) {
        alert("A senha deve conter ao menos uma letra maiúscula, uma letra minúscula, números e caracteres especiais, mínimo 6 e máximo de 10 caracteres")
        cadastro.senha.focus()
        return false
    }
}