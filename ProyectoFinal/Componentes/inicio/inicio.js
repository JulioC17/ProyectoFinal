import './inicio.css'

const inicio = () => {
    document.querySelector("body").innerHTML = `
        <header id = "header">
            <h1 id = "title">AppTime</h1>
            <input type = "text" placeholder = "Buscar una Ciudad" id = "input"></input>
            <button class = "findBtn">Buscar</button>
        </header>
        <ul id = "cityList">
        </ul>
`

}

export default inicio