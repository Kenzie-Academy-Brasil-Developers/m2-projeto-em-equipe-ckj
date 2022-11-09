const btnMobile = document.querySelector('.menu-mobile')
const btnContainer = document.querySelector('.btn-container')
btnMobile.addEventListener('click', (e) =>{
  btnContainer.classList.toggle('hidden')
})