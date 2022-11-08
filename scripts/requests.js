const baseUrl = "https://m2-api-adot-pet.herokuapp.com/"


async function requestAllPets (){
    try{
        const request = await fetch(baseUrl + "pets", {
            method: "GET",
            Headers: {
                "Content-Type": "application/json"
            }
        })

        if(request.ok){
            const response = await request.json()

            return response
        }
    }catch(err){
            console.log(err)
    }
}

async function requestSingUp (user){
    try{
        const request = await fetch(baseUrl + "users", {
            method: "POST",
            Headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(user)
        })

        if(request.ok){
            const response = await request.json()

            return response
        }
    }catch(err){
            console.log(err)
    }
}

export{requestAllPets,}