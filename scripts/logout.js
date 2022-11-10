export function logout(id){
    const btnLogout = document.getElementById(id)
    if(btnLogout){
        btnLogout.addEventListener('click', (e) =>{
            window.location.replace("/homeOFF/index.html")
            localStorage.clear()
        })
    }
   
}