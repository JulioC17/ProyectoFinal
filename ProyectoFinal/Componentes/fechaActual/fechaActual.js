
const fechaActual = (fechaActual) => { //funcion para cmabiar el formato de fecha ya que el que da la api no me gustaba XD
    const fecha = new Date(fechaActual)
    const options = {day: "numeric", month: "short", year:"numeric"}
    return fecha.toLocaleDateString('es-ES', options)

}

export default fechaActual