import './main.css' 

//RJSWAB9AEJ3MWXW4EF6UZAS2T
//Hacemos el fetch a la api
const fetchData = async () =>{
    const data = await fetch ("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Valencia/?key=RJSWAB9AEJ3MWXW4EF6UZAS2T&unitGroup=metric&lang=es")
    const results = await data.json()
    consoleLog(results)
}

//aqui empezamos a pintar los datos en el main
const consoleLog = (data) => {
    console.log(data);

    document.querySelector("body").innerHTML = `
    <main>
        <div id = "main"></div>    
            <h1 id = "location">${data.address}</h1>
            <h1 id = "temp">${data.currentConditions.temp}°</h1>
            <h2 id = "conditions">${data.currentConditions.conditions}</h2>
            <h2 id = "description">${data.description}</h2>
        </div>

        <div id ="pronostic">
            <h3>Previsión(15 Días)</h3>
            <ul id="lista">
            </ul>
        </div>
    </main>
    `
    //hacemos un bucle ya que los datos de la api del pronostico esta dentro de un array
    for (const day of data.days) {
        const li = document.createElement("li")
        const dia = document.createElement("h3")
        const minima = document.createElement("h3")
        const maxima = document.createElement("h3")
        dia.innerHTML = day.datetime
        minima.innerHTML = "min " + (day.tempmin) + "°"
        maxima.innerHTML = "max " + (day.tempmax) + "°"
        li.appendChild(dia)
        li.appendChild(minima)
        li.appendChild(maxima)
        
        document.querySelector("#lista").appendChild(li)
}

}

export default fetchData