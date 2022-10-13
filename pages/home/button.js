

const changeButton = () => {
    let listaDeHokages = ['Candidatar', 'Remover candidatura'];
    let Index = 0;
    let botao = document.querySelectorAll(".candidatar");

    botao.forEach((element) => {
        element.addEventListener('click', () => {
            // element.classList.toggle('button-seguindo')
            if (Index + 1 == listaDeHokages.length) {
                Index = 0;
                closedJob()
            } else {
                element.classList.toggle('buttonRemover')
                Index = Index + 1;
              
            }
            element.textContent = listaDeHokages[Index]
           

            return element
        })
    }
    )
}
changeButton()

