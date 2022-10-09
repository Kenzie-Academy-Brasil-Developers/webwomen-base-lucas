/* Desenvolva sua lógica aqui... */
function createCategoryButton(array) {
    array.forEach((elt) => {
      const button = document.querySelector(".home-office"); 
     
    if(button){
        button.innerHTML = elt
    }
  
     return button
    });
  }


const createJob = (jobsData) => {
    const {enterprise, title, location, descrition, modalities} = jobsData
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
      <button class="candidatar">Candidatar</button>
      
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