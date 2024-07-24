document.querySelector('.parametro-senha__texto');
let = tamanhoSenha: 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#&*';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document,querySelectorAll('.checkbox');
const forcaSenha = document.querySelector ('.forca');


botoes[0]. onclick = diminuiTamanho;
botoes[1]. onclick = aumentaTamanho;

function diminuiTamanho() {
    if(tamanhoSenha > 1) {
        tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;

    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20) {
    //tamanhoSenha= tamanhoSenha +1;
    tamanhoSenha++;

}
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}



for (i=0; i < checkbox.lenght;i++) {
    checkbox[i].onclick = geraSenha;
}




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
    
    let senha= '';
    for (let i = 0; i < tamanhoSenha;i++) {
    let numeroAleatório = Math.random() * alfabeto.lenght;
    numeroAleatório = Math.floor(numeroAleatório);
    senha = senha +  alfabeto[numeroAleatório];
    
    }
    campoSenha.value = senha;
    classificaSenha();
}

    function classificaSenha() {
        forcaSenha.classlist.remove('fraca');
        if (tamanhoSenha > 11){
        forcaSenha.classlist.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12) {
        forcaSenha.classlist.add('media');
    } else if (tamanhoSenha < 5) {
        forcaSenha.classlist.add('fraca');
    }

}