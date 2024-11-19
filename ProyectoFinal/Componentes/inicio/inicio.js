import './inicio.css'
import renderFav from '../renderFav/renderFav'
import fetchDataTablet from '../fetchTabletPc/fetchTabletPc'

const inicio = () => { //funcion para pinta lo nocesario al arranque de la app, y llama a renderFav() si es que hubiese algun favorito ya guardado
    
    document.querySelector("body").innerHTML = `
        <header id = "header">
            <h1 id = "title">AppTime</h1>
            <input type = "text" placeholder = "Buscar una Ciudad" id = "input"></input>
            <button class = "findBtn">Buscar</button>
        </header>
        <div class="renderTablet"></div>
    `
    
    


    const mediaQuerytablet = window.matchMedia('(min-width:1440px)')
    if(mediaQuerytablet.matches){
        const getBackground = localStorage.getItem("backgroundImage")
        if(getBackground === null){
            fetchDataTablet("Madrid")
            console.log("hola");
        }else{
            fetchDataTablet(getBackground)
        }
}

renderFav()

}

export default inicio