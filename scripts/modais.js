import { updateProfile , deleteAccount } from "./requests.js"

            // MODAL ATUALIZAR PERFIL
 const body = document.querySelector('body')

export function updateProfileModal(){
    const background        = document.createElement("div")
    const container         = document.createElement("div")
    const header            = document.createElement("div")
    const btnClose          = document.createElement("img")
    const cardBox           = document.createElement("div")
    const h2                = document.createElement("h2")
    const boxInputs         = document.createElement("form")
    const inputName         = document.createElement('input')
    const inputEmail        = document.createElement('input')
    const inputAvatar       = document.createElement('input')
    const btnUpdate         = document.createElement("button")
    const footer            = document.createElement("div")

    background.classList.add('background-modal')
    container.classList = 'container-modal position-modal-itens'
    cardBox.classList.add('card-box')
    inputAvatar.classList.add('inputs-modal')

    h2.innerText = "Atualizar perfil"
    inputName.type = "text"
    inputName.placeholder = "Nome"
    inputEmail.type = "email"
    inputEmail.placeholder = "E-mail"
    inputAvatar.type = "url"
    inputAvatar.placeholder = "Avatar"
    btnClose.src = "/assets/img/close-Modal.svg" 
    btnUpdate.innerText = "Atualizar"

    container.append(header,cardBox, footer)
    header.appendChild(btnClose)
    cardBox.append(h2, boxInputs)
    boxInputs.append(inputName,inputEmail,inputAvatar,btnUpdate)
    background.appendChild(container)
    
    btnUpdate.addEventListener('click', async (e) =>{
        e.preventDefault()

        const data = {
            name: inputName.value,
            avatar_url: inputAvatar.value,
            email: inputEmail.value
        }
        console.log(data)
       const response =  await updateProfile(data)
       if(response){
        body.removeChild(background)
       }
    })

    btnClose.addEventListener('click' , (e) =>{
        e.preventDefault()
        background.remove()
    })

    return background
}
//  function openModalUpdateProfile(){
//     const btnUpdateID  = document.getElementById('btn_update')
//     if(btnUpdateID) {
//         btnUpdateID.addEventListener('click' , (e) =>{
//             e.preventDefault()
//             const modal = updateProfileModal()
//             body.appendChild(modal)
            
//         })
//     }
   
//  }
//  openModalUpdateProfile()

        //  MODAL DELETAR CONTA DO PERFIL

export function deleteAccountModal(){
    const background        = document.createElement("div")
    const container         = document.createElement("div")
    const header            = document.createElement("div")
    const btnClose          = document.createElement("img")
    const cardBox           = document.createElement("div")
    const h2                = document.createElement("h2")
    const btnReject         = document.createElement("button")
    const btnDelete         = document.createElement("button")

    h2.innerText        = "Deseja mesmo deletar sua conta?"
    btnReject.innerText = "Não desejo deletar minha conta"
    btnDelete.innerText = "Quero deletar minha conta"
    btnClose.src = "/assets/img/close-Modal.svg" 

    background.classList.add('background-modal')
    container.classList = 'container-modal position-modal-itens'
    cardBox.classList.add('card-box')

    container.append(header,cardBox)
    header.appendChild(btnClose)
    cardBox.append(h2,btnReject,btnDelete)
    background.appendChild(container)


    btnClose.addEventListener('click' , (e) =>{
        e.preventDefault()
        background.remove()
    })
  return background
}

//  function openModaldeleteAccount(){
//     const btnDeleteAccount  = document.getElementById('btn_delete_account')
//     if(btnDeleteAccount) {
//         btnDeleteAccount.addEventListener('click' , (e) =>{
//             e.preventDefault()
//             const modal = deleteAccountModal()
//             body.appendChild(modal)
            
//         })
//     }
   

//  }

//  openModaldeleteAccount()

 

 //modal cadastrar novo pet
export function modalNewPet(){
    const backgroundModal = document.createElement('section')
    const setModal = document.createElement('div')
    const topModal = document.createElement('div')
    const imgCloseModal = document.createElement('img')
    const containModal = document.createElement('div')
    const titleModalPosition = document.createElement('div')
    const titleModal = document.createElement('h2')
    const formModal = document.createElement('form')
    const nomeInputModal = document.createElement('input')
    const raçaInputModal = document.createElement('input')
    const avatarInputModal = document.createElement('input')
    const buttonModal = document.createElement('button')

    const bottomModal = document.createElement('div')


    backgroundModal.classList = 'background-modal'
    backgroundModal.id = 'modal_container'

    setModal.classList = 'modal-register'
    topModal.classList = 'div-purple-top flex justify-end'
    containModal.classList = 'position-modal-login container-modal'
    titleModalPosition.classList = 'flex justify-center'

    titleModal.classList = 'title-modal'
    titleModal.innerText = 'Cadastrar pet'

    imgCloseModal.src = "/assets/img/close-Modal.svg"
    imgCloseModal.id = 'close-modal'

    formModal.classList = 'position-modal-itens'

    nomeInputModal.classList = 'inputs-modal'
    nomeInputModal.name = 'text'
    nomeInputModal.type = 'text'
    nomeInputModal.placeholder = 'Nome'
    nomeInputModal.required 

    raçaInputModal.classList = 'inputs-modal'
    raçaInputModal.name = 'raça'
    raçaInputModal.type = 'text'
    raçaInputModal.placeholder = 'raça'
    raçaInputModal.required 

    avatarInputModal.classList = 'inputs-modal'
    avatarInputModal.name = 'avatar'
    avatarInputModal.type = 'text'
    avatarInputModal.placeholder = 'Avatar'
    avatarInputModal.required 


    buttonModal.classList = 'button-modal-cadastrar'
    buttonModal.type = 'click'
    buttonModal.innerText = 'Login'
    



    bottomModal.classList = 'div-purple-bottom-login'


    topModal.appendChild(imgCloseModal)
    titleModalPosition.appendChild(titleModal)
    formModal.append(nomeInputModal, raçaInputModal,avatarInputModal, buttonModal)
    
    containModal.append(titleModalPosition, formModal)
    setModal.append(topModal, containModal, bottomModal)

    backgroundModal.appendChild(setModal)



    return backgroundModal

 }

