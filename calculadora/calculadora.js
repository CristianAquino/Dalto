// let numero = document.querySelector('.numero');
let numero = document.querySelector('.contenedor');
let entrada = document.querySelector('.entrada');
let operador = document.querySelector('.operador');
let resultado = document.querySelector('.resultado');

// evento para los numeros
numero.addEventListener('click',(e)=>{
    if(e.target && e.target.tagName === 'INPUT'){
        let num= e.target.attributes['value'].value;
        if(num ==='='){
            entrada.value;
        }else{
            entrada.value += num;
        }
    }
});

//evento para los operadores
// operador.addEventListener('click',(e)=>{
//     if(e.target && e.target.tagName === 'INPUT'){
//         let ope = e.target.attributes['value'].value;
//         if(ope ==='='){
//             entrada.value;
//         }else{
//             entrada.value += ope;
//         }
//     }
// });

const suma = (suma)=>{
    let datos = suma.reduce((total,value) => parseInt(total)+parseInt(value));
    return datos;
}

const diferencia = (diferencia)=>{
    let datos = diferencia.reduce((total,value) => parseInt(total)-parseInt(value));
    return datos;
}

const producto = (producto)=>{
    let datos = producto.reduce((total,value) => parseInt(total)*parseInt(value));
    return datos;
}

const cociente = (cociente)=>{
    let datos = cociente.reduce((total,value) => parseInt(total)/parseInt(value));
    return datos;
}

//evento para el resultado
resultado.addEventListener('click',()=>{
    let valor = (entrada.value).split('*');
    let resultado = producto(valor);
    entrada.value = resultado;
})