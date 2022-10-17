
// passo 1 - pegar os elementos que representam as abas no HTML

const abas = document.querySelectorAll(".aba");

// passo 2 - identificar o clique no elemento da aba
abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    // passo 3 - no click, desmarcar a aba selecionada

    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // passo 4 - marcar a aba clicada como selecionada
      aba.classList.add("selecionado");  
}

function mostrarInformacoesDaAba(aba) {
     // passo 5 - esconder o último conteúdo
     const informacaoSelecionada = document.querySelector(".informacao.selecionado")
     informacaoSelecionada.classList.remove("selecionado");

     // passo 6 - mostrar próximo conteúdo selecionado
     const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

     const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
     informacaoASerMostrada.classList.add("selecionado")
}