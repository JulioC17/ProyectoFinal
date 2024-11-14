import './backgrounds.css'

const changeWall = () => { //esta funcion me cambia los backgrounds images en dependencia del resultado que este dando la api, basandose en el clima de ese momento
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