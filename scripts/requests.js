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



                // VER PERFIL

async function readProfile(){
    const token   = localStorage.getItem("token") 
    try{
        const request = await fetch(baseUrl + "users/profile", {
            method: "GET",
            Headers: {
                "Content-Type": "application/json"
            },
        })

        if(request.ok){
            const response = await request.json()

            return response
        }
    }catch(err){
            console.log(err)
    }
}

export{readProfile,}

            // ATUALIZAR PERFIL

async function updateProfile(data){
    const token   = localStorage.getItem("token") 
    try{
        const request = await fetch(baseUrl + "users/profile", {
            method: "POST",
            Headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        })

        if(request.ok){
            const response = await request.json()

            return response
        }
    }catch(err){
            console.log(err)
    }
}

export{updateProfile,}

            // DELETAR CONTA DO PERFIL

async function deleteAccount(){
    const token   = localStorage.getItem("token") 
    try{
        const request = await fetch(baseUrl + "users/profile", {
            method: "DELETE",
            Headers: {
                "Content-Type": "application/json"
            },
        })

        if(request.ok){
            const response = await request.json()

            return response
        }
    }catch(err){
            console.log(err)
    }
}

export{deleteAccount,}