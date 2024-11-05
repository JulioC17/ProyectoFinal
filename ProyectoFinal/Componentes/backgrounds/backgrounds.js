import './backgrounds.css'

const changeWall = () => {
    const conditions = document.querySelector("#conditions")
    const body = document.querySelector("body")

    if(conditions.textContent == "Parcialmente nublado"){
        body.classList.add("pn")
    }else if(conditions.textContent == "Nublado"){
        body.classList.add("clouds")
    }else if(conditions.textContent == "Claro"){
        body.classList.add("claro")
    }else if(conditions.textContent == "Lluvia, Parcialmente nublado"){
        body.classList.add("lluvia")
    }
}

export default changeWall