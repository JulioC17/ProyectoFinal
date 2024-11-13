
const fechaActual = (fechaActual) => {
    const fecha = new Date(fechaActual)
    const options = {day: "numeric", month: "short", year:"numeric"}
    return fecha.toLocaleDateString('es-ES', options)

}

export default fechaActual