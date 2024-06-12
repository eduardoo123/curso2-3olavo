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
const checkbox = document,querySelectorAll('.checkbox');

for (i=0; i < checkbox.lenght;i++) {
    checkbox[i].onclick = geraSenha;
}



const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#&*';

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    } 
    if (checkbox[1].checked) {
        alfabeto= alfabeto = letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto= alfabeto+ numeros;
    }
    if (checkbox[3].checked){
        alfabeto= alfabeto + simbolos;
    }
    console.log(alfabeto);
    let senha= '';
    for (let i = 0; i < tamanhoSenha;i++) {
    let numeroAleatório = Math.random()*letrasMaiusculas.lenght;
    numeroAleatório = Math.floor(numeroAleatório);
    senha = senha +  letrasMaiusculas{numeroAleatório};
   
    }
}

campoSenha.value = senha;
