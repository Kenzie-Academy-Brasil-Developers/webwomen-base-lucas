/* Desenvolva sua lógica aqui... */

const createJob = (jobsData) => {
  const {id, enterprise, title, location, descrition, modalities } = jobsData  

  const li = document.createElement("li")
  const divCard = document.createElement("div")
  const h3 = document.createElement("h3")
  const divInfo = document.createElement("div")
  const pEmterprise = document.createElement('P')
  const PLocation = document.createElement("P")
  const pDescription = document.createElement("p")
  const divButton = document.createElement("div")
  const buttonModalities = document.createElement("button")
  const buttonCandidatar = document.createElement("button")
  

  divCard.classList.add("div-card")
  h3.innerText = title
  divInfo.classList.add('div-info')
  pEmterprise.innerText = enterprise
  PLocation.innerText = location
  pDescription.innerText = descrition
  pDescription.classList.add("paragraph-lorem")
  divButton.classList.add('div-button')
  buttonModalities.innerText = modalities[0]
  buttonModalities.classList.add('home-office')
  buttonCandidatar.innerText = "Candidatar",
  buttonCandidatar.classList = 'candidatar buttonRemover'
  buttonCandidatar.id = id


divInfo.append(pEmterprise, PLocation),
divButton.append(buttonModalities, buttonCandidatar),
divCard.append(h3, divInfo, pDescription, divButton),
li.append(divCard)

  return li
}

let section = document.querySelector(".section-vagas")

const renderJob = (cardList) => {

  section.innerHTML = ""

  cardList.forEach((element) => {
    const card = createJob(element)
    section.appendChild(card)
  })


}
renderJob(jobsData)


// *************job in aside********************


const asideJob = document.querySelector(".asideJob")
let jobAside = []

const renderJobInInside = () => {
  const buttonRender = document.querySelectorAll(".candidatar")  
  
  buttonRender.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault()
      
       jobsData.forEach(elm => {
        if (elm.id == event.target.id){

          if(!jobAside.includes(elm)){

            jobAside.push(elm)

            jobArr(jobAside)
          }
         
         
        }else if(elm.contains){
          !elm
        }
       
        const jobPref = localStorage.getItem('candidatar')
        
      
        if(!jobPref){
          localStorage.setItem('candidatar', JSON.stringify(elm))
        }
      
      } )      

     
    })
  })
     
}
renderJobInInside()


const jobArr = (arr) => {

const asideJob = document.querySelector(".asideJob")
asideJob.innerHTML = ''

arr.map((element, index) => {
 
const card =  createJobInAside(element, index)
asideJob.append(card)


  })
  
}




const createJobInAside = (jobsData, index) => {
  const { enterprise, title, location } = jobsData

  
  const li = document.createElement('li')
  const divInfoVagas = document.createElement("div")
  const divCard = document.createElement("div")
  const divPessoa = document.createElement("div")
  const h3 = document.createElement("h3")
  const divInfo = document.createElement("div")
  const pEmterprise = document.createElement('p')
  const PLocation = document.createElement("p")
  const img = document.createElement("img")

h3.innerText =title
pEmterprise.innerText = enterprise
PLocation.innerText = location
img.src = './assets/img/trash.svg'
img.addEventListener('click', ( event) => {
  event.preventDefault()

  
  closedJob(index)

  const jobPref = localStorage.getItem('candidatar')
  
  if(jobPref){
    localStorage.removeItem('candidatar')
  }

})


divInfoVagas.classList.add('div-info-vagas')
divCard.classList.add('div-card-vagas')
divPessoa.classList.add('div-pessoa')
divInfo.classList.add('div-info')
img.classList.add('button-trash')

  divPessoa.append(h3)
  divInfo.append(pEmterprise, PLocation)
  divInfoVagas.append(divCard, divPessoa,divInfo  )
  li.append(divInfoVagas, img)  

  return li
}


const closedJob = (index) => {

  jobAside.splice(index, 1)
  jobArr(jobAside) 
  
  
 }

