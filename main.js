/*
Gerar um número aleatório entre 1 e 100. Ok
Gravar o número do turno que o jogador está. Iniciar em 1. ok
Dar ao jogador uma forma de adivinhar o número. ok
Após a tentativa ter sido submetida, primeiro gravar em algum lugar para que o usuário possa ver as tentativas anteriores.
Depois, verificar se o palpite está correto.
Se estiver correto:
Escrever mensagem de parabéns.
Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
Mostrar controle que permita ao jogador reiniciar o jogo.
Se o palpite estiver errado e o jogador ainda tem turnos sobrando:
Dizer ao jogador que ele está errado.
Permitir que ele insira outra resposta.
Incrementar o número do turno em 1.
Se o jogador está errado mas não tem turnos sobrando:
Dizer ao jogador que o jogo acabou.
Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
Mostrar controle que permita ao jogador reiniciar o jogo.
Quando reiniciar, tenha certeza de resetar todas as variáveis e a interface do jogo, então volte para o passo 1.
*/
let corpo = document.querySelector('.container');
let numAleatorio = Math.floor(Math.random() * 100  + 1);
let display = document.querySelector('.campoPalpite');
let botao = document.querySelector('.botao');
let ultimoResultado = document.querySelector('.ultimoResultado');
let baixoOuAlto = document.querySelector('.baixoOuAlto');
let palpites = document.querySelector('.palpites')
let turno = 1;

botao.addEventListener('click', function(e){
    e.preventDefault();
    conferirPalpite();

});




function conferirPalpite(){
    let valor = Number(display.value)

    if(!valor){
        alert('O que você digitou não é um valor')
    }else{
        if(turno > 10){
            alert('Você ja usou todos palpites')
            display.disabled = true;
            return;
        }
        else{
            if(valor > 100 || valor < 1){
                alert('valor invalido');
            }else{
                 if(valor === numAleatorio){
                    ultimoResultado.textContent = 'Parabéns, você acertou!'
                    ultimoResultado.style.backgroundColor = 'green';
                    ultimoResultado.style.textAlign = "center";
                    ultimoResultado.style.fontSize = '40px'
                    ultimoResultado.style.display = 'block';
                    baixoOuAlto.textContent = '';
                    display.disabled = true;
                 }else{
                    if(valor < numAleatorio){
                        baixoOuAlto.textContent = '-> Maior ->';
                    }else{
                        baixoOuAlto.textContent = '<- Menor <-';
                    }
                    let lista = document.createElement('li');
                    lista.textContent = `${turno}°: ${valor}`;
                    ultimoResultado.appendChild(lista);
                    lista.style.fontSize = '18px';
                    //palpites.textContent = 'TENTATIVAS:' + turno;
                }  
             
            }
     }
    turno++;
    display.value = '';
}
}
