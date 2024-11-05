import './añadirbtn.css'
import inicio from '../inicio/inicio'
import showFindBtn from '../showBtn/showBtn'

const addFav = () => {
    const addBtn = document.querySelector("#añadirbtn")
    const body = document.querySelector("body")
    const saveH1 = document.querySelector("#location").innerText
    const card= document.createElement("div")

    
    
    addBtn.addEventListener("click", () => {
        inicio()
        showFindBtn()
        body.classList.remove(...body.classList)
        //estas tres funciones de arriba no pueden faltar
        localStorage.setItem("favoritos", saveH1)
        const getFav = localStorage.getItem("favoritos")
        
        const fetchDataCard = async (getFav) =>{
            const data = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${getFav}/?key=RJSWAB9AEJ3MWXW4EF6UZAS2T&unitGroup=metric&lang=es&iconSetvalues=icons1`)
            const results = await data.json()
            renderCard(results)
        }

        const renderCard = (data) => {
            console.log(data);
            
            card.innerHTML = `

            `
        }
        

        
        
        
    })
}

export default addFav