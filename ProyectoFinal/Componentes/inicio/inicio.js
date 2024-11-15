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
    `
    const mediaQuerytablet = window.matchMedia('(min-width:820px) and (max-width:1440px)')
    if(mediaQuerytablet.matches){
        const getBackground = localStorage.getItem("backgroundImage")
        const verifyRenderTablet = document.querySelector(".renderTablet")
        const renderTablet = document.createElement("div")
        renderTablet.classList.add("renderTablet")
        if(verifyRenderTablet === null && getBackground === null){
            document.querySelector("body").append(renderTablet)
            fetchDataTablet("madrid")
            
        }else{
            document.querySelector("body").append(renderTablet)
            fetchDataTablet(getBackground)
        }
        
    }

    
    

renderFav()

}

export default inicio