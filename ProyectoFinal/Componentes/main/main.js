import './main.css' 
import goBack from '../atrasBTn/atrasBtn'
import changeWall from '../backgrounds/backgrounds'
import addFav from '../añadirbtn/añadirbtn'
import fechaActual from '../fechaActual/fechaActual'

//RJSWAB9AEJ3MWXW4EF6UZAS2T
//Hacemos el fetch a la api
const fetchData = async (ciudad) =>{
    const data = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ciudad}/?key=${import.meta.env.VITE_CLIENT_ID}&unitGroup=metric&lang=es&iconSetvalues=icons1`)
    const results = await data.json()
    consoleLog(results)
}

//aqui empezamos a pintar los datos en el main
const consoleLog = (data) => {
    document.querySelector("body").innerHTML = `
    <nav id = "navBar">
        <span id = "atrasbtn" style = "cursor: pointer">Atrás</span>
        <span id = "añadirbtn" style = "cursor: pointer">Añadir</span>
    </nav>
    <main>
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
    //hacemos un bucle ya que los datos de la api del pronostico esta dentro de un array
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


        
        changeWall()
        goBack()
        addFav()
}

;

export default fetchData


