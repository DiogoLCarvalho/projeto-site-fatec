function validar() {
    let nome = contato.name.value
    let cpf = contato.cpf.value
    let email = contato.email.value


    if (nome==' ') {
        alert('Campo nome é obrigatório');
        contato.nome.focus();
        return false;
    }
    if (cpf==' ') {
        alert('Campo cpf é obrigatório');
        contato.cpf.focus();
        return false;
    }
    if (email==' ') {
        alert('Campo email é obrigatório');
        contato.email.focus();
        return false;
    }
    if (telefone==' ') {
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
}