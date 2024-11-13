import './renderfav.css'
import addFav from '../añadirbtn/añadirbtn'
import fetchData from '../main/main'


const renderFav = () => {
    
    const body = document.querySelector("body")
    const bigDiv = document.createElement("div")
    bigDiv.classList.add("bigDiv")
    
    if(localStorage.getItem("favoritos") === null){
        const favNot = document.createElement("h3")
        favNot.classList.add("cityNot")
        favNot.innerText = "No tienes ciudades favoritas"
        body.appendChild(favNot)
    }else{
        const renderCities = JSON.parse(localStorage.getItem("favoritos"))
        
        for (const city of renderCities){
            
            const divCity = document.createElement("div")
            divCity.classList.add("cards")
            
            const divFav = async () => {
                const data = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=RJSWAB9AEJ3MWXW4EF6UZAS2T&unitGroup=metric&lang=es&iconSetvalues=icons1`)
                const results = await data.json()

                divCity.innerHTML = `
                    <button class = "eliminar">X</button>
                    <div class = "citiesFav">
                        <h3>${results.address}</h3>
                        <h3>Sensación Térmica: ${results.currentConditions.feelslike}°</h3>
                        <h3 class = "conditions">${results.currentConditions.conditions}</h3>
                    </div>
                    <div class = "temp">
                        <h1>${results.currentConditions.temp}°</h1>
                    </div>
                 `
            bigDiv.appendChild(divCity)
            divCity.addEventListener("click", () => {
                fetchData(city)
                
            })

            const textImage = results.currentConditions.conditions
            
            if(textImage === "Parcialmente nublado"){
               divCity.classList.add("cardParcialmente") 
            } else if(textImage === "Nublado"){
                divCity.classList.add("cardNublado")
            }else if(textImage === "Claro"){
                divCity.classList.add("cardSol")
            }else if(textImage === "Lluvia, Parcialmente nublado"){
                divCity.classList.add("cardLloviendo")
                } 

                const buttons = divCity.querySelectorAll(".eliminar")
                buttons.forEach(btn => {
                    btn.addEventListener("click", () => {
                    const renderCitiesUpdate = renderCities.filter(ciudad => ciudad !== city)
                    if (renderCitiesUpdate.length === 0){
                        localStorage.removeItem("favoritos")
                        /* const favNot = document.createElement("h3")
                        favNot.classList.add("cityNot")
                        favNot.innerText = "No tienes ciudades favoritas"
                        body.appendChild(favNot) */
                    }else{
                    localStorage.setItem("favoritos", JSON.stringify(renderCitiesUpdate))
                }
                    divCity.remove()
                    location.reload()

                    } )
                })
                
            }
            divFav()
            
            
    }

        }
    body.appendChild(bigDiv)
    
    
                
            

    

}

export default renderFav