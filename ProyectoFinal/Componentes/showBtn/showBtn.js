import fetchData from "../main/main"
import "./showBtn.css"

const showFindBtn = () => {
    const findInput = document.querySelector("#input")
    const findBtn = document.querySelector(".findBtn")
    findInput.addEventListener("focus", () => {
        findBtn.style.display = "block"
        
    })

    document.addEventListener("click", (event) => {
        if(event.target !== findInput && event.target !== event.findBtn){
                findBtn.style.display = "none"
        }
    })
        
    findBtn.addEventListener("click", (event) => {
        event.stopPropagation()
        fetchData(findInput.value)
        

    })

}

export default showFindBtn