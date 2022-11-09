import{requestAllPets} from "/scripts/requests.js"
import {openModalRegister, openModalLogin} from "/scripts/modais.js"

const ulList = document.getElementById('ul-listAllPets')
ulList.innerHTML = ''

async function renderListPets(){

    const list = await requestAllPets()

    list.forEach(({name, avatar_url, species}) => {
            
        ulList.insertAdjacentHTML("beforeend", `
        <li class="cards-pets">
            <div class="flex flex-col">
                <img src="${avatar_url}" alt="cachorrinho">
                <h3 class="name-pet">${name}</h3>
                <span class="type-pet">${species}</span>
            </div>
        </li>       
        `)
    });
}
renderListPets()

const buttonHeader = document.querySelector('.hidden-vec')
const modButtons = document.querySelector('.hidden-button')
const idImgVector = document.getElementById('img-vector')


function buttonsHeader(){
    console.log("buttonHeader")
    buttonHeader.addEventListener('click', () =>{
        console.log("click")
        modButtons.classList = 'flex gap-7 ' + (modButtons.className.search('hidden-button') == -1 ? 'hidden-button' : 'absolut-buttons' )
      idImgVector.src =  (modButtons.className.search('hidden') == -1 ? '/assets/img/Vector (X).svg' : '/assets/img/Vector.svg')

    })
}

buttonsHeader()


function showModalRegister(){
    const modalButton = document.querySelector('.botton-register-home')
    const mainContainer = document.getElementById('point-modal')

    modalButton.addEventListener('click', (event) => {
        event.preventDefault()
        console.log("click")
        const telaModal = openModalRegister()
        mainContainer.appendChild(telaModal)
        closeModal()
    })
}

function showModalLogin(){
    const modalButton = document.querySelector('.button-login-home')
    const mainContainer = document.getElementById('point-modal')

    modalButton.addEventListener('click', (event) => {
        event.preventDefault()
        console.log("click")
        const telaModal = openModalLogin()
        mainContainer.appendChild(telaModal)
        closeModal()
    })
}


function closeModal(){
    const modalClose = document.getElementById('close-modal')
    const campModal = document.getElementById('modal_container')
    modalClose.addEventListener('click', () =>{
        campModal.remove()
    })
}
showModalRegister()
showModalLogin()