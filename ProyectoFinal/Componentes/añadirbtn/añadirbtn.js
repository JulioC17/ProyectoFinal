import './añadirbtn.css'


const addFav = () => {
    const addBtn = document.querySelector("#añadirbtn")
    const saveH1 = document.querySelector("#location").innerText
    
        addBtn.addEventListener("click", () => {
            if (localStorage.getItem("favoritos") === null){
                const ciudadFav = []
                ciudadFav.push(saveH1)
                localStorage.setItem("favoritos", JSON.stringify(ciudadFav))
                alert("Ciudad Añadida a tus Favoritos")
            }else{
                const ciudadFav = JSON.parse(localStorage.getItem("favoritos"))
                    if(ciudadFav.includes(saveH1)){
                        alert("Esta ciudad ya está en tu lista de Favoritos")
                    }else{
                        ciudadFav.push(saveH1)
                        localStorage.setItem("favoritos", JSON.stringify(ciudadFav))
                        alert("Ciudad Añadida a tus Favoritos")
                    }
            }
        })
}

export default addFav