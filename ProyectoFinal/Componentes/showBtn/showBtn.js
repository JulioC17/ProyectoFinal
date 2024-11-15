import fetchData from "../main/main"
import fetchDataTablet from "../fetchTabletPc/fetchTabletPc"
import changeWall from "../backgrounds/backgrounds"
import addFav from "../añadirbtn/añadirbtn"
import "./showBtn.css"
import renderFav from "../renderFav/renderFav"
import inicio from "../inicio/inicio"

const showFindBtn = () => { //obtiene los datos del input para llamar a las funciones encargadas de pintar los elementos (medias queries)
    
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
        
        const mediaQueryMovil = window.matchMedia('(max-width:819px)')
        const mediaQuerytablet = window.matchMedia('(min-width:820px) and (max-width:1440px)')

        findBtn.addEventListener("click", (event) => {
        event.stopPropagation()
        if(mediaQueryMovil.matches){
            fetchData(findInput.value)
        }else if (mediaQuerytablet.matches){
            renderweather.innerHTML = ""
            /* body.appendChild(renderweather) */
            fetchDataTablet(findInput.value)
            localStorage.setItem("backgroundImage", findInput.value)
        }
        
    })
    
}

export default showFindBtn