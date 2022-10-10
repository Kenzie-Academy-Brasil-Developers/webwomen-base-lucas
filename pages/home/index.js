/* Desenvolva sua lógica aqui... */
function createCategoryButton(array) {
  array.forEach((elt) => {
    const button = document.querySelector(".home-office");

    if (button) {
      button.innerHTML = elt
    }

    return button
  });
}


const createJob = (jobsData) => {
  const {id, enterprise, title, location, descrition, modalities } = jobsData
  let div = document.createElement('div')
  div.classList.add('div-card')

  div.insertAdjacentHTML("afterbegin", `
      
    <h3>${title}</h3>
    <div class="div-info">
      <p>${enterprise}</p>
      <p>${location}</p>
    </div>
    <p class="paragraph-lorem">${descrition}
      </p>
      <div class="div-button">
        <button class="home-office"${createCategoryButton(modalities)}</button>
      <button class="candidatar" id="${id}" >Candidatar</button>
    
    

      `)
     
  return div
}

const section = document.querySelector(".section-vagas")
const renderJob = (cardList) => {

  section.innerHTML = ""

  cardList.forEach((element) => {
    const card = createJob(element)
    section.appendChild(card)
  })

  //   createJob(cardList)

}
renderJob(jobsData)


// *************job in aside********************

const createJobInAside = (jobsData) => {
  const { enterprise, title, location } = jobsData

  let div = document.createElement('div')
  div.classList.add('div-card')

  div.insertAdjacentHTML("afterbegin", `
      
  <div class="div-info-vagas" >
  <div class="div-card-vagas">
   <div class="div-pessoa">
     <h3>${title}</h3>
   <div class="div-info">
     <p>${enterprise}</p>
     <p>${location}</p>
   </div>          
   </div>
   <img src="./assets/img/trash.svg" alt="" class="button-trash">  
   </div>         
      
      `)

  return div
}


const aside = document.querySelector(".vagas-selecionadas")
const renderJobCreate = (cardList) => {  

  cardList.forEach((element) => {
    const card = createJobInAside(element)
    aside.appendChild(card)
  })
}



const renderJobInInside = () => {

const button = document.querySelectorAll(".candidatar")

button.forEach((element) => {
  element.addEventListener('click', () => {
    aside.append(createJobInAside(jobsData))
  })
})
}
renderJobInInside()

const closedJob = () => {
  const buttonTrash = document.querySelectorAll('.button-trash')
  console.log(buttonTrash);
  const divCard = document.querySelector(".div-card")

 buttonTrash.forEach((element) => {
  
  element.addEventListener('click', (event) => {
    
    event.preventDefault
    divCard.delete()
  
  })
 })
}
closedJob()



















// let secaoJob = document.querySelector(".section-vagas")
// let secaoAside = document.querySelector(".vagas-selecionadas")


// secaoJob.addEventListener("click", adicionarProduto)
// function adicionarProduto(event){
  

//   let btnAdicionar = event.target
//   if(btnAdicionar.tagName == "BUTTON"){
//       //acessando o pai do button e clonando para o carrinho
//      let produto = btnAdicionar.closest("li").cloneNode(true)
//      aside.appendChild(produto)
//   }
// }


// function acessandoProduto(event) {
//   const button = document.querySelectorAll(".candidatar")
  
//   button.forEach((element) => {
//     element.addEventListener('click', () => {
//       let btnAdicionar = event.target
//       if (btnAdicionar == "BUTTON") {
//         //produto pelo id
//         let idProduto = btnAdicionar.id
//         //verificando produto
//         let item = jobsData.find(function (item) {
//             if(item.id == idProduto){
//                 return item
//             }
           
//         })
//         renderJobCreate(item)
//     }
//     })
    
//   })

    
   

// }




// function adicionarProduto(jobsData){    
// if(id === jobsData.id ){
//   createJobInAside()
// }

    
// }

  




//Selecionando o clique somente no botao
// card.addEventListener("click", acessandoProduto)
// function acessandoProduto(event) {
   
//     let btnAdicionar = event.target
//     if (btnAdicionar == "BUTTON") {
      
//         let item = jobsData.find(function (item) {
//            return item
           
//         })
//         adicionarProduto(item)
//     }

// }
