// import { readProfile } from "/scripts/requests.js"
import { logout } from "../../scripts/logout.js"

// readProfile()
logout("logout")

        // MENU MOBILE
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

      // RENDERIZAR DADOS DO PERFIL

function renderDataProfile(element){

  const aside       = document.querySelector('#aside')
  const boxProfile = document.createElement('div')
  const imgProfile = document.createElement('img')
  const boxData    = document.createElement('div')
  const h2         = document.createElement('h2')
  const divData    = document.createElement('div')
  const userName   = document.createElement('span')
  const email      = document.createElement('span')
  const boxBtn     = document.createElement('div')
  const btnUpdate = document.createElement('button')
  const btnDelete  = document.createElement('button')

  boxProfile.classList.add('img-profile')
  boxData.classList = "box-data container flex flex-col gap-12"
  divData.classList = "data flex flex-col"
  boxBtn.classList  = "box-btn flex justify-end gap-7"
  btnUpdate.classList.add('btn-update')
  btnDelete.classList.add('btn-delete')

  imgProfile.src = element.avatar_url
  imgProfile.alt = "imagem de perfil"

  h2.innerText        = "Dados pessoais"
  userName.innerText  = `Nome: ${element.name}`
  email.innerText     = `E-mail: ${element.email}`
  btnUpdate.innerText= "Atualizar informações"
  btnDelete.innerText = "Deletar conta"

  btnUpdate.id = "btn_update"
  btnDelete.id = "btn_delete_account"

  boxProfile.appendChild(imgProfile)
  boxData.append(h2, divData, boxBtn)
  divData.append(userName, email)
  boxBtn.append(btnUpdate, btnDelete)
  aside.append(boxProfile,boxData)


}

renderDataProfile()