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

export{requestAllPets,}