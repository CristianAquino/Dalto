// let boton = document.querySelector('.modo');

// boton.addEventListener('click',() => {
//     // if(boton.value == 'on'){
//     //     document.body.style.background='black';
//     //     boton.value = '';
//     // }else{
//     //     document.body.style.background='white';
//     //     boton.value = 'on';
//     // }
//     document.body.classList.toggle('dark');
// })

// onchange - Ejercicio 2
// let boton = document.querySelector('.boton');
// let contador = document.querySelector('.contador');

// function procesador() {
//     let procesador = document.getElementById('procesador');
//     return procesador.value;
// }
// function monitor() {
//     let monitor = document.getElementById('monitor');
//     return monitor.value;
// }
// function disco() {
//     let disco = document.getElementById('disco');
//     return disco.value;
// }

// boton.addEventListener('click',()=>{
//     let a = procesador();
//     let b = monitor();
//     let c = disco();

//     contador.innerHTML = parseInt(a)+parseInt(b)+parseInt(c);
// })

// onchange - Ejercicio 3
// let boton = document.querySelector('.boton');
// let contador = document.querySelector('.contador');
// let cantidad = document.querySelector('.cantidad')

// function piza() {
//     let piza = document.getElementById('piza');
//     return piza.value;
// }

// boton.addEventListener('click',()=>{
//     let a = piza();
//     let b = cantidad.value

//     contador.value = parseInt(a)*parseInt(b);
// })

// onchange - Ejercicio 4
// let boton = document.querySelector('.boton');
// let contador = document.querySelector('.contador');

// function primero() {
//     let primero = document.getElementById('primero');
//     return primero.value;
// }
// function segundo() {
//     let segundo = document.getElementById('segundo');
//     return segundo.value;
// }
// function tercero() {
//     let tercero = document.getElementById('tercero');
//     return tercero.value;
// }
// function cuarto() {
//     let cuarto = document.getElementById('cuarto');
//     return cuarto.value;
// }

// boton.addEventListener('click',()=>{
//     let a = primero();
//     let b = segundo();
//     let c = tercero();
//     let d = cuarto();

//     let suma = parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
//     let res = 4 - suma;
//     contador.innerHTML =`Cantidad de Correctas ${suma}<br>Cantidad de Incorrectas ${res}<br>` ;
// })

// Setter and Getter
// class Persona{
//     constructor(nombre,edad){
//         this._nombre = 'no registrado';
//         this._edad = 0;
//     }
//     get nombre(){
//         return this._nombre;
//     }
//     set nombre(n){
//         this._nombre = n;
//     }
//     get edad(){
//         return this._edad;
//     }
//     set edad(e){
//         if(e>0){
//             this._edad = e;
//         }else{
//             document.write('valor no permitido');
//         }
//     }
//     mostar(){
//         document.write(`Nombre: ${this._nombre}, Edad: ${this._edad}<hr>`);
//     }
// }

// let p1 = new Persona();
// p1.edad=-21

// const url = 'https://apis.datos.gob.ar/georef/api/provincias';
// fetch(url)
// .then(res => res.json())
// .then(dato =>{
//     for (const a of dato.provincias) {
//         document.write(a.nombre+'<hr>')
//     }
//     console.log(dato);
// });

// const nuevo = async (url)=>{
//     let data = await fetch(url);
//     let jdata = await data.json();

//     for (const a of jdata.provincias) {
//         document.write(a.nombre+'<hr>');
//     }
// }
// nuevo(url);


let botones = document.querySelector('.botones');
let entrada = document.querySelector('.entrada');

botones.addEventListener('click',()=>{
    datos(entrada.value);
})

const datos = async (id)=>{
    try {
        let url = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
        let p = await url.json();
        p.map(elemento => document.write(`Nombre: ${elemento.name}, Username: ${elemento.username}, Correo: ${elemento.email}`));
            
    } catch (error) {
        alert(error.message);
    }
}
