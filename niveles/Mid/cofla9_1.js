// const entrada = document.querySelector('.entrada');

// entrada.addEventListener('select',(e)=>{
//     let start = e.target.selectionStart;
//     let end = e.target.selectionEnd;
//     let valor = entrada.value;
//     document.querySelector('p').innerHTML = valor.substring(start,end);
// })

const name = document.getElementById('name');
const email = document.getElementById('email');
const materia = document.getElementById('materia');
const enviar = document.getElementById('enviar');

enviar.addEventListener('click',(e)=>{
    e.preventDefault();
    let error = validacion();
    if (error[0]){
        alert(error[1])
    }else{
        alert('CORRECTO')
    }
})

const validacion = ()=>{
    let error = [];
    if(name.value.length <5 || name.value.length>20){
        error[0] = true;
        error[1] = 'NAME INCORRECTO';
        return error;
    }else if(email.value.length<5 || 
            email.value.indexOf('@') == -1 || 
            email.value.indexOf('.') == -1 || 
            email.value.indexOf('com')==-1 || 
            email.value.indexOf('gmail')==-1){
        error[0]= true;
        error[1] = 'EMAIL INCORRECTO';
        return error;
    }
    error[0]=false
    return error;
}