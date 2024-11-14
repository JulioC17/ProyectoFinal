import './atrasBtn.css'
import inicio from '../inicio/inicio'
import showFindBtn from '../showBtn/showBtn'


const goBack = () => { //esta funcion me manipula el boton de ir atras 
    const goBackBtn = document.querySelector("#atrasbtn")
    const body = document.querySelector("body")
    goBackBtn.addEventListener("click", () => {
        body.classList.remove(...body.classList)
        inicio()
        showFindBtn()
    })
}

export default goBack