const botoes = document.querySelectorAll(".botao")



for(let i =0;i<botoes.length; i++){
    console.log(i)
    botoes[i].onclick = function(){
        console.log("teste")
        botoes[i].classList.add("ativo");
    }
}