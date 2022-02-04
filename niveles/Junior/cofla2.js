// COFLA 2
let alumnos = []
let cantidad = parseInt(prompt('Ingrese cantidad de alumnos'))
for (let i = 0; i < cantidad; i++) {
    let name = prompt(`Ingrese nombre del alumno ${i+1}`)
    alumnos[i] = [name,0]
}
function asistencia(name,indice,dia){
    let nm = prompt(`Alumno ${name} asistio el dia ${dia+1}??`)
    if(nm.toUpperCase()=='P'){
        alumnos[indice][1]++
    }
}
for(i=0;i<5;i++){
    for(al in alumnos){
        asistencia(alumnos[al][0],al,i)
    }
}

// CONOCIENDO LA CANTIDAD DE ALUMNOS
// for(i=0;i<cantidad;i++){
//     let resultado = `Name: ${alumnos[i][0]}<br>
//     ___________Presente: ${alumnos[i][1]}<br>
//     ___________Ausentes: ${5-alumnos[i][1]}<br><br>`
//     if(5-alumnos[i][1]>3){
//         resultado+=`Estado: Reprobado<br><br>`
//     }
//     document.write(resultado)
// }
// SIN CONOCER LA CANTIDAD DE ALUMNOS
for(i in alumnos){
    let resultado = `Name: ${alumnos[i][0]}<br>
    ___________Presente: ${alumnos[i][1]}<br>
    ___________Ausentes: ${5-alumnos[i][1]}<br><br>`
    if(5-alumnos[i][1]>3){
        resultado+=`Estado: Reprobado<br><br>`
    }
    document.write(resultado)
}