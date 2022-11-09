import { updateProfile , deleteProfile } from "./requests.js"

            // MODAL ATUALIZAR PERFIL

function updateProfileModal(){
    const background        = document.createElement("div")
    const container         = document.createElement("div")
    const header            = document.createElement("div")
    const btnClose          = document.createElement("img")
    const cardBox           = document.createElement("div")
    const h2                = document.createElement("h2")
    const boxInputs         = document.createElement("div")
    const inputName         = document.createElement('input')
    const inputEmail        = document.createElement('input')
    const inputAvatar       = document.createElement('input')
    const btnUpdate         = document.createElement("button")
    const footer            = document.createElement("div")

    
    h2.innerText = "Atualizar perfil"
    inputName.type = "text"
    inputName.placeholder = "Nome"
    inputEmail.type = "email"
    inputEmail.placeholder = "E-mail"
    inputAvatar.type = "image"
    inputAvatar.placeholder = "Avatar"

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
        }
        console.log(data)
        await updateProfile(data)
    })

    btnClose.addEventListener('click' , (e) =>{
        e.preventDefault()
        background.remove()
    })
}

export function openModalUpdateProfile(){
    const btnUpdateID  = document.getElementById('btn_update')
    if(btnUpdateID) {
        btnUpdateID.addEventListener('click' , (e) =>{
            e.preventDefault()
            updateProfileModal()
        })
    }
   
 }

        //  MODAL DELETAR CONTA DO PERFIL

function deleteAccountModal(){
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


    container.append(header,cardBox)
    header.appendChild(btnClose)
    cardBox.append(h2,btnReject,btnDelete)
    background.appendChild(container)


    btnClose.addEventListener('click' , (e) =>{
        e.preventDefault()
        background.remove()
    })
}

export function openModaldeleteAccount(){
    const btnDeleteAccount  = document.getElementById('btn_delete_account')
    if(btnDeleteAccount) {
        btnDeleteAccount.addEventListener('click' , (e) =>{
            e.preventDefault()
            deleteAccountModal()
        })
    }
   
 }