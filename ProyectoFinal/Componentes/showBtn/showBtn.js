import fetchData from "../main/main"
import "./showBtn.css"
import fechaActual from "../fechaActual/fechaActual"

const showFindBtn = () => {
    
    const findInput = document.querySelector("#input")
    const findBtn = document.querySelector(".findBtn")
    
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
           
            
            
    }})

}

export default showFindBtn