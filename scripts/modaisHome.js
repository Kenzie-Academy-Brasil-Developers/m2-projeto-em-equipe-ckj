import {requestSingUp, requestLogin} from './requests.js'
/*  
<section class="background-modal">
        <div class="modal-register ">
            <div class="div-purple-top flex justify-end"> <img src="/assets/img/close-Modal.svg" alt=""></div>
            <div class="position-modal-itens container-modal">
                <div class="flex justify-center">
                    <h2 class="title-modal">Cadastre-se</h2>
                </div>              
                <form class="position-modal-itens">
                    <input class="inputs-modal" name="nome" type="text" placeholder="Nome" required>
                    <input class="inputs-modal" name="email" type="email" placeholder="E-mail" required>
                    <input class="inputs-modal" name="senha" type="password" placeholder="Senha" required>
                    <input class="inputs-modal" name="avatar" type="url" placeholder="Atavar?">
                    <button class="button-modal-cadastrar" type="submit">Cadastrar</button>
                </form>
                <div>
                    <span class="info-modal-footer">Já tem cadastro? <a href="">Clique aqui</a> para logar</span>
                </div>
            </div>
            <div class="div-purple-bottom"></div>
        </div>
    </section>
*/
function openModalRegister(){
    const backgroundModal = document.createElement('section')
    const setModal = document.createElement('div')
    const topModal = document.createElement('div')
    const imgCloseModal = document.createElement('img')
    const containModal = document.createElement('div')
    const titleModalPosition = document.createElement('div')
    const titleModal = document.createElement('h2')
    const formModal = document.createElement('form')
    const nameInputModal = document.createElement('input')
    const emailInputModal = document.createElement('input')
    const senhaInputModal = document.createElement('input')
    const avatarInputModal = document.createElement('input')
    const buttonModal = document.createElement('button')
    const infosModalPosition = document.createElement('div')
    const infosModal = document.createElement('span')
    const linkLoginModal = document.createElement('a')
    const bottomModal = document.createElement('div')

    buttonModal.addEventListener('click',()=>{
        let obj = {
            name: nameInputModal.value,
            email: emailInputModal.value,
            password: senhaInputModal.value,
            avatar_url: avatarInputModal.value,
        }
      
        requestSingUp(obj)
    })

    backgroundModal.classList = 'background-modal'
    backgroundModal.id = 'modal_container'

    setModal.classList = 'modal-register'
    topModal.classList = 'div-purple-top flex justify-end'
    containModal.classList = 'position-modal-itens container-modal'
    titleModalPosition.classList = 'flex justify-center'

    titleModal.classList = 'title-modal'
    titleModal.innerText = 'Cadastre-se'

    imgCloseModal.src = "/assets/img/close-Modal.svg"
    imgCloseModal.id = 'close-modal'

    formModal.classList = 'position-modal-itens'

    nameInputModal.classList = 'inputs-modal'
    nameInputModal.name = 'nome'
    nameInputModal.type = 'text'
    nameInputModal.placeholder = 'Nome'
    nameInputModal.required 

    emailInputModal.classList = 'inputs-modal'
    emailInputModal.name = 'email'
    emailInputModal.type = 'email'
    emailInputModal.placeholder = 'E-mail'
    emailInputModal.required 

    senhaInputModal.classList = 'inputs-modal'
    senhaInputModal.name = 'senha'
    senhaInputModal.type = 'password'
    senhaInputModal.placeholder = 'Senha'
    senhaInputModal.required 

    avatarInputModal.classList = 'inputs-modal'
    avatarInputModal.name = 'avatar'
    avatarInputModal.type = 'url'
    avatarInputModal.placeholder = 'Avatar?'

    buttonModal.classList = 'button-modal-cadastrar'
    buttonModal.type = 'submit'
    buttonModal.innerText = 'Cadastrar'
    
    linkLoginModal.classList = ''
    linkLoginModal.href = ''
    linkLoginModal.innerText = ' Clique aqui para logar.'

    infosModal.classList = 'info-modal-footer'
    infosModal.innerText = 'Já tem cadastro?'

    bottomModal.classList = 'div-purple-bottom'


    topModal.appendChild(imgCloseModal)
    titleModalPosition.appendChild(titleModal)
    formModal.append(nameInputModal, emailInputModal, senhaInputModal, avatarInputModal, buttonModal)
    infosModal.appendChild(linkLoginModal)
    infosModalPosition.appendChild(infosModal)
    containModal.append(titleModalPosition, formModal, infosModalPosition)
    setModal.append(topModal, containModal, bottomModal)

    backgroundModal.appendChild(setModal)

    return backgroundModal

}

function openModalLogin(){
    const backgroundModal = document.createElement('section')
    const setModal = document.createElement('div')
    const topModal = document.createElement('div')
    const imgCloseModal = document.createElement('img')
    const containModal = document.createElement('div')
    const titleModalPosition = document.createElement('div')
    const titleModal = document.createElement('h2')
    const formModal = document.createElement('form')
    const emailInputModal = document.createElement('input')
    const senhaInputModal = document.createElement('input')
    const buttonModal = document.createElement('button')
    const infosModalPosition = document.createElement('div')
    const infosModal = document.createElement('span')
    const bottomModal = document.createElement('div')

    buttonModal.addEventListener("submit" , async (e) => {
        console.log("oi")
        e.preventDefault()
        const data = {

        email:emailInputModal.value,
        password:senhaInputModal.value,
     
    }
        await requestLogin(data)
    })

    backgroundModal.classList = 'background-modal'
    backgroundModal.id = 'modal_container'

    setModal.classList = 'modal-register'
    topModal.classList = 'div-purple-top flex justify-end'
    containModal.classList = 'position-modal-login container-modal'
    titleModalPosition.classList = 'flex justify-center'

    titleModal.classList = 'title-modal'
    titleModal.innerText = 'Login'

    imgCloseModal.src = "/assets/img/close-Modal.svg"
    imgCloseModal.id = 'close-modal'

    formModal.classList = 'position-modal-itens'

    emailInputModal.classList = 'inputs-modal'
    emailInputModal.name = 'email'
    emailInputModal.type = 'email'
    emailInputModal.placeholder = 'E-mail'
    emailInputModal.required 

    senhaInputModal.classList = 'inputs-modal'
    senhaInputModal.name = 'senha'
    senhaInputModal.type = 'password'
    senhaInputModal.placeholder = 'Senha'
    senhaInputModal.required 


    buttonModal.classList = 'button-modal-cadastrar'
    buttonModal.type = 'submit'
    buttonModal.innerText = 'Login'
    

    infosModal.classList = 'info-modal-footer'
    infosModal.innerHTML = '<span class="info-modal-footer">Já tem cadastro? <a href="">Clique aqui</a> para logar</span>'

    bottomModal.classList = 'div-purple-bottom-login'


    topModal.appendChild(imgCloseModal)
    titleModalPosition.appendChild(titleModal)
    formModal.append(emailInputModal, senhaInputModal, buttonModal)
    infosModalPosition.appendChild(infosModal)
    containModal.append(titleModalPosition, formModal, infosModalPosition)
    setModal.append(topModal, containModal, bottomModal)

    backgroundModal.appendChild(setModal)

    return backgroundModal

}

export{openModalRegister, openModalLogin}