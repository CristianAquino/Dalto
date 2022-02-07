alumnos = [{
    nombre:'Cristian1',
    correo: 'cristian1@gmail.com',
    materia: 'Fisica1' 
},{
    nombre:'Cristian2',
    correo: 'cristian2@gmail.com',
    materia: 'Fisica2' 
},{
    nombre:'Cristian3',
    correo: 'cristian3@gmail.com',
    materia: 'Fisica3' 
},{
    nombre:'Cristian4',
    correo: 'cristian4@gmail.com',
    materia: 'Fisica4' 
},{
    nombre:'Cristian5',
    correo: 'cristian5@gmail.com',
    materia: 'Fisica5' 
}];

const boton = document.querySelector('.confirmar');
const contenedor = document.querySelector('.container');

let htmlCode = '';

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos['nombre'];
    let correo = datos['correo'];
    let materia = datos['materia'];
    htmlCode += `
    <div class="nombre">${nombre}</div>
    <div class="correo">${correo}</div>
    <div class="materia">${materia}</div>
    <div class="semana">
        <select class="semana-elegida">
            <option value="Semana1">Semana1</option>
            <option value="Semana2">Semana2</option>
        </select>
    </div>`;
}

contenedor.innerHTML = htmlCode;

boton.addEventListener('click',()=>{
    let confirmar = confirm('REALMENTE KIERE CONFIRMAR?')
    if(confirmar){
        document.body.removeChild(boton)
        let elementos = document.querySelectorAll('.semana');
        let semanasElegidas = document.querySelectorAll('.semana-elegida');
        for(elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
})