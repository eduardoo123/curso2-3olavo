document.querySelector('.parametro-senha__texto');

numeroSenha.textContent = 5;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0]. onclick = diminuiTamanho;

function diminuiTamanho() {
    if(tamanhoSenha > 1) {
        tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;

    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho(){
    if (tamanhoSenha <20) {
    //tamanhoSenha= tamanhoSenha +1;
    tamanhoSenha++;

}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function geraSenha() {
    let senha= '';
    for (let i = 0; i < tamanhoSenha;i++) {
    let numeroAleatório = Math.random()*letrasMaiusculas.lenght;
    numeroAleatório = Math.floor(numeroAleatório);
    senha = senha +  letrasMaiusculas{numeroAleatório};
    console.log(letrasMaiusculas[numeroAleatório]);
    }
}

campoSenha.value = letrasMaiusculas;
console.log(botoes);