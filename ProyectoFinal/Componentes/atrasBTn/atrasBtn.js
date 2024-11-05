import './atrasBtn.css'
import inicio from '../inicio/inicio'


const goBack = () => {
    const goBackBtn = document.querySelector("#atrasbtn")
    goBackBtn.addEventListener("click", () => {
        inicio()
        
    })
}

export default goBack