// const prueba = document.querySelector(".parrafo");

// prueba.addEventListener("contextmenu",saludar);

// function saludar(){
//     alert("hola");
//     prueba.removeEventListener("click",saludar);
// }

/* descontruyendo un objeto
const usuario = {
    nombre:'Carlos',
    correo:'correo@correo.com',
    edad:22,
    pais:'Mexico',
    profesion:'Desarrollador web'
};

const datos = ({nombre,edad,salario='9000'}) =>{
    console.log(nombre,edad,salario);
}

datos(usuario); */

/* Clases y herencias 
class Usuario{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarSaludo(){
        return 'hola';
    }

    info(correo){
        return `
            Nombre: ${this.nombre}<br>
            Edad: ${this.edad}<br>
            Correo: ${correo}<br>
            <hr>
        `;
    }
}

class Estudiante extends Usuario{
    constructor(nombre,edad,carrera){
        super(nombre,edad);
        this.carrera = carrera;
    }

    info(){
        return `
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Carrera: ${this.carrera}`
    }
}

const carlos = new Usuario('carlos',23);
document.write(carlos.info('correo@correo.com'));
const alejandro = new Estudiante('alejandro',25,'GA');
document.write(alejandro.info());*/

/* acortando creacion de objeto
const crearObjeto = (nombre,edad) =>{
    return{
        nombre,
        edad,
        info(){
            return `${nombre} tiene ${edad} años`;
        }
    }
}

console.log(crearObjeto('cristian',26).info()); */

/* parametros REST 
const datos = (...datos) => console.log(datos);

datos('cristian',26,'Software');*/

/* parametros Spead 
const datos = (...datos) => console.log(datos);

const arreglo = ['cristian',26,'Software']
datos(...arreglo);*/

/* resolve - reject
const promesa = new Promise( (resolve,reject) => {
    //Accion que se ejecutara
    setTimeout( ()=>{
        const exito = true;
        if (exito){
            resolve('La operacion tuvo exito');//exito
        }else{
            reject('La operacio No tuvo exito');//no exito
        }
    },4000);
});

promesa.then( (mensaje) =>{
    alert(mensaje);
})

promesa.catch( (mensaje) =>{
    alert(mensaje);
}); */

/* async y await
const getNOmbreAsync = async (idPost) =>{
    try {
        const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
        const post = await resPost.json();

        const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const user = await resUser.json();
        console.log(user.name);
        
    } catch (error) {
        console.log(error);
    }
}
getNOmbreAsync(80); */

/*blob
const video = document.querySelector('.video');

fetch('isabel.mp4')
    .then( res => res.blob())
    .then( vid => video.src = URL.createObjectURL(vid))
*/