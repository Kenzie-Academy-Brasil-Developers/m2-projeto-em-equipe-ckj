const baseUrl = "https://m2-api-adot-pet.herokuapp.com/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjgwODUwNjgsImV4cCI6MTY2ODY4OTg2OCwic3ViIjoiYzhhYTBiODctMDEwOS00MjY4LTg5YTktNTllMzZhNDhhNmUxIn0.WCKOfvPvAn1Yeq_9GkezjpO2ewBi-fxogmHRDKT6CfY"

async function requestAllPets (){
    try{
        const request = await fetch(baseUrl + "pets", {
            method: "GET",
            headers: {
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
             

                // CADASTRO


async function requestSingUp (user){
    console.log(JSON.stringify(user))
    try{
        const request = await fetch(baseUrl + "users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(user)
            
        })

        if(request.ok){
            const response = await request.json()
            console.log(response)
            
            return response
        }
    }catch(err){
            console.log(err)
    }
}

                // LOGIN
                
async function requestLogin (user){
    try{
        const request = await fetch(baseUrl + "session/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(user)
        })

        if(request.ok){
            const response = await request.json()
            const local = localStorage.setItem("token", response.token)
            
            window.location.replace('/pages/homeON/index.html')
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
            headers: {
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



            // ATUALIZAR PERFIL

async function updateProfile(data){
    const token   = localStorage.getItem("token")
    try{
        const request = await fetch(baseUrl + "users/profile", {
            method: "POST",
            headers: {
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



            // DELETAR CONTA DO PERFIL

async function deleteAccount(){
    const token   = localStorage.getItem("token") 
    try{
        const request = await fetch(baseUrl + "users/profile", {
            method: "DELETE",
            headers: {
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


export{requestAllPets,updateProfile, readProfile,deleteAccount, requestSingUp, requestLogin }