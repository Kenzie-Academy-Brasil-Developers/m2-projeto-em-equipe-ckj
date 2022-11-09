import { readProfile } from "../../scripts/requests.js"
readProfile()

        // MENU MOBILE

const btnMobile = document.querySelector('.menu-mobile')
const btnContainer = document.querySelector('.btn-container')
btnMobile.addEventListener('click', (e) =>{
  btnContainer.classList.toggle('hidden')
})

      // RENDERIZAR DADOS DO PERFIL

function renderDataProfile(element){
  const aside      = document.querySelector('#aside')
  const boxProfile = document.createElement('div')
  const imgProfile = document.createElement('img')
  const boxData    = document.createElement('div')
  const h2         = document.createElement('h2')
  const divData    = document.createElement('div')
  const userName   = document.createElement('span')
  const email      = document.createElement('span')
  const birthDate  = document.createElement('span')
  const boxBtn     = document.createElement('div')
  const btnUpdate = document.createElement('button')
  const btnDelete  = document.createElement('button')

  boxProfile.classList.add('img-profile')
  boxData.classList = "box-data container flex flex-col gap-12"
  divData.classList = "data flex flex-col"
  boxBtn.classList  = "box-btn flex justify-end gap-7"
  btnUpdate.classList.add('btn-update')
  btnDelete.classList.add('btn-delete')

  // imgProfile.src = element.avatar_url
  imgProfile.alt = "imagem de perfil"

  h2.innerText        = "Dados pessoais"
  // userName.innerText  = `Nome: ${element.name}`
  // email.innerText     = `E-mail: ${element.email}`
  // birthDate.innerText = `Data de nascimento: ${element}`
  btnUpdate.innerText= "Atualizar informações"
  btnDelete.innerText = "Deletar conta"

  btnUpdate.id = "btn_update"
  btnDelete.id = "btn_delete_account"

  boxProfile.appendChild(imgProfile)
  boxData.append(h2, divData, boxBtn)
  divData.append(userName, email, birthDate)
  boxBtn.append(btnUpdate, btnDelete)
  aside.append(boxProfile,boxData)


}

renderDataProfile()