import{requestAllPets} from "/scripts/requests.js"

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
            <samp class="type-pet">${species}</samp>
        </div>
    </li>       
        `)
    });
}
renderListPets()