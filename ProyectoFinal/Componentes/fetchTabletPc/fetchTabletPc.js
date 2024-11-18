import './fetchTabletPc.css'
import fechaActual from '../fechaActual/fechaActual'
import changeWall from '../backgrounds/backgrounds'
import inicio from '../inicio/inicio'

const fetchDataTablet = async (ciudad) =>{  //Esta funcion realiza el fetch para buscar los datos 
    const data = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ciudad}/?key=RJSWAB9AEJ3MWXW4EF6UZAS2T&unitGroup=metric&lang=es&iconSetvalues=icons1`)
    const results = await data.json()
    renderTablet(results)
}

const renderTablet = (data) => {    //esta funcion me pinta todo en la app de Tablet
    document.querySelector(".renderTablet").innerHTML = `
    <nav id = "navBar">
        <span id = "añadirbtn" style = "cursor: pointer">Añadir</span>
    </nav>
    <main id = "mainPc">
        <div id = "main">   
            <h1 id = "location">${data.resolvedAddress.split(",")[0].trim()}</h1>
            <h1 id = "temp">${data.currentConditions.temp}°</h1>
            <h2 id = "conditions">${data.currentConditions.conditions}</h2>
            <h2 id = "description">${data.description}</h2>
        </div>

        <div id ="pronostic">
            <h3>Previsión(15 Días)</h3>
            <ul id="lista">
            </ul>
        </div>
        
        <div id = "otherStats">
            <div id = "feelsLike">
                <h3>Sensación</h3>
                <h2>${data.currentConditions.feelslike}°</h2>
            </div>

            <div id = "uv">
                <h3>Indice UV</h3>
                <h2>${data.currentConditions.solarenergy}</h2>
            </div>

            <div id = "wind">
                <h3>Viento</h3>
                <ul>
                    <li >
                        <h3>Rachas</h3>
                        <h3>${data.currentConditions.windgust}km/h</h3>
                    </li>

                    <li>
                        <h3>Viento</h3>
                        <h3>${data.currentConditions.windspeed}km/h</h3>
                    </li>
                </ul>
            </div>

            <div id = "Sunset">
                <h3>Puesta de Sol</>
                <h2>${data.currentConditions.sunset}</h2>
            </div>

            <div id = "precip">
                <h3>Precipitación</h3>
                <h2>${data.currentConditions.precip} mm</h2>
            </div>

            <div id = "visibility">
                <h3>Visibilidad</h3>
                <h2>${data.currentConditions.visibility} km</h2>
            </div>

            <div id = "Humidity">
                <h3>Humedad</h3>
                <h2>${data.currentConditions.humidity} %</h2>
                <h4>El punto de rocío es de ${data.currentConditions.dew}°</h4>
            </div>

            <div id = "pressure">
                <h3>Presión</h3>
                <h2>${data.currentConditions.pressure}hPa</h2>
            </div>

            <div id = "snow">
                <h3>Nieve</h3>
                <h2>${data.currentConditions.snow} mm</h2>
            </div>


        </div>
    </main>
    <footer>
        <h3>Powered by JulioCesar</h3>
    </footer>
    `
    //hacemos un bucle ya que los datos de la api del pronostico para 15 dias esta dentro de un array
    for (const day of data.days) {
        const li = document.createElement("li")
        const dia = document.createElement("h3")
        const minima = document.createElement("h3")
        const maxima = document.createElement("h3")
        dia.innerHTML = fechaActual(day.datetime)
        minima.innerHTML = "min " + (day.tempmin) + "°"
        maxima.innerHTML = "max " + (day.tempmax) + "°"
        li.appendChild(dia)
        li.appendChild(minima)
        li.appendChild(maxima)
        
        document.querySelector("#lista").appendChild(li)
    }

    const newAddBtn = document.querySelector("span")
    const saveH1 = document.querySelector("#location").innerText
    newAddBtn.addEventListener("click", () => {
        if (localStorage.getItem("favoritos") === null){   
            const ciudadFav = []
            ciudadFav.push(saveH1)
            localStorage.setItem("favoritos", JSON.stringify(ciudadFav))
            alert("Ciudad Añadida a tus Favoritos")
            addFavTablet()
            
        }else{
            const ciudadFav = JSON.parse(localStorage.getItem("favoritos"))
                if(ciudadFav.includes(saveH1)){
                    alert("Esta ciudad ya está en tu lista de Favoritos")
                }else{
                    ciudadFav.push(saveH1)
                    localStorage.setItem("favoritos", JSON.stringify(ciudadFav))
                    alert("Ciudad Añadida a tus Favoritos")
                    addFavTablet()
                }
                
        }
    })
    changeWall()

    
}

const addFavTablet = () => {
    const bigDiv = document.querySelector(".bigDiv")
    const filterdiv = []
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
                        <h3 class = "ciudades">${results.address.split(",")[0].trim()}</h3>
                        <h3>Sensación Térmica: ${results.currentConditions.feelslike}°</h3>
                        <h3 class = "conditions">${results.currentConditions.conditions}</h3>
                    </div>
                    <div class = "temp">
                        <h1>${results.currentConditions.temp}°</h1>
                    </div>
                 `
                 
            }
            
                bigDiv.appendChild(divCity)
                location.reload()
                
            divFav()
            const buttons = divCity.querySelectorAll(".eliminar")
                buttons.forEach(btn => {
                    btn.addEventListener("click", () => {
                    const renderCitiesUpdate = renderCities.filter(ciudad => ciudad !== city)
                    if (renderCitiesUpdate.length === 0){
                        localStorage.removeItem("favoritos")
                    
                    }else{
                    localStorage.setItem("favoritos", JSON.stringify(renderCitiesUpdate))
                    }
                    divCity.remove()
                    location.reload()

                    } )
                })
        }
    }
}


export default fetchDataTablet

