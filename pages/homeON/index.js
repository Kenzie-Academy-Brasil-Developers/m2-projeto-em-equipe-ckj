import{requestAllPets} from "/scripts/requests.js"
import{logout} from "/scripts/logout.js"
function profilePage(id){
    const btnLogout = document.getElementById('profile-page')
    if(btnLogout){
        btnLogout.addEventListener('click', (e) =>{
            window.location.replace("/pages/profile/index.html")
        })
    }
   
}
profilePage()
logout("logout")



const ulListON = document.getElementById('ul-listAllPets-ON')
ulListON.innerHTML = ''

async function renderListPets(){

    const list = await requestAllPets()

    list.forEach(({name, avatar_url, species}) => {
            
        ulListON.insertAdjacentHTML("beforeend", `
        <li class="cards-pets">
            <div class="flex flex-col">
                <img src="${avatar_url}" alt="cachorrinho">
                <h3 class="name-pet">${name}</h3>
                <span class="type-pet">${species}</span>
                <div class="flex justify-center items-center mt-5">
                    <button type="submit" class="button-adote">Me adota?</button>
                </div>
            </div>
        </li>       
        `)
    });
}
renderListPets()


