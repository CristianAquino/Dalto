const obtenerInformacion = (materia)=>{
    const materias= {
        fisica:['ProfesorFisica','pedro','pepito','cofla','maria'],
        programacion:['ProfesorProgramacion','pedro','juan','pepito',],
        logica:['ProfesorLogica','pedro','juan','pepito','cofla','maria'],
        quimica:['ProfesorQuimica','pedro','juan','pepito','cofla','maria']
    }
    if(materias[materia] != undefined){
        return [materias[materia],materia]
    }else{
        return materias
    }
}
const mostrarInformacio = (materia)=>{
    let informacion = obtenerInformacion(materia)
    if(informacion != false){
        let profesor = informacion[0][0]
        informacion[0].shift()
        document.write(`Profesor: ${profesor}<br> 
        Materia: ${informacion[1]}<br> 
        Alumnos: ${informacion[0]}<br>`)
    }
}
const cantidadClases = (alumno)=>{
    let informacion = obtenerInformacion()
    let materias = []
    let profesores = []
    let cantidad = 0
    for(info in informacion){
        console.log(informacion[info][0])
        if(informacion[info].includes(alumno)){
            materias.push(info)
            profesores.push(informacion[info][0])
            cantidad++
        }
    }
    return document.write(`La cantidad de materias inscritas el alumno ${alumno} son: ${cantidad}<br>
    Materias inscritas: ${materias}<br>
    Profesores: ${profesores}`)
} 

mostrarInformacio('logica')
cantidadClases('cofla')