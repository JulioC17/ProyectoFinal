import fetchData from "../main/main"
import "./showBtn.css"

const showFindBtn = () => { //obtiene los datos del input para llamar a las funciones encargadas de pintar los elementos
    
    const findInput = document.querySelector("#input")
    const findBtn = document.querySelector(".findBtn")
    const body = document.querySelector("body")
    const renderweather = document.createElement("div")  //es posible que se pueda eliminar
    renderweather.classList.add("renderTablet") // es posible que se pueda eliminar
    
    findInput.addEventListener("focus", () => {
        findBtn.style.display = "block"
    })

    document.addEventListener("click", (event) => {
        if(event.target !== findInput && event.target !== event.findBtn){
                findBtn.style.display = "none"
        }
    })

    findBtn.addEventListener("click", (event) => {
    event.stopPropagation()
            if(findInput.value.length == 0){
                alert("Escribe algo...")
            }else{
                fetchData(findInput.value)
            }
    })
    
}

export default showFindBtn

