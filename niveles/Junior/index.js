// document: nodo raiz, del cual derivan el resto de nodos
// elemente: nodos definidos por etiqueta html - se podria decir q hacemos referencia a las etiquetas
// text: texto dentro del nodo element, se considera un nuevo nodo hijo de tipo texto
// atribute: los atributos de las etiquetas definen nodos (en js no los veremos como nodos, sino como informacion asociada al nodo de tipo element)
//  querySelector selecciona el primer elemento q encuentre

// todo lo q sigue solo es aplicable al primero q encuentre
let etiqueta = document.querySelector('.saludo')
// setAttribute() modifica o crea el valor de un atributo
etiqueta.setAttribute('style','color:red')
// getAttribute() obtiene el valor de un atributo
console.log(etiqueta.getAttribute('style'))
// removeAttribute() remueve el valor de un atributo
etiqueta.removeAttribute('class')

// modificar un elemento por el usuario, solo acepta valores booleanos  
// etiqueta.setAttribute('contentEditable','true')
etiqueta.contentEditable = 'true'

// FORMA DE CREAR VARIOS ELEMENTOS ES6
let contenedor = document.querySelector('ol')
let fragmento = document.createDocumentFragment()
for(let i = 0;i<20;i++){
    let des = document.createElement('LI')
    des.innerHTML = 'JA'
    fragmento.appendChild(des)
}
contenedor.appendChild(fragmento)
// TODOS OMITEN EL NODO TEXT
let saludar = document.querySelector('.saludar')
// PARA OBTENER EL PRIMER ELEMENTO HIJO USAMOS FIRSTELEMENTCHILD
let fChild = saludar.firstElementChild;
console.log(fChild)
// PARA OBTENER EL ULTIMO ELEMENTO HIJO USAMOS FIRSTELEMENTCHILD
let lChild = saludar.lastElementChild;
console.log(lChild)
// PARA OBTENER LISTA DE NODOS DE ELEMENTOS HIJOS USAMOS CHILDREND
let hijos = saludar.children
console.log(hijos)

// REEMPLAZANDO UN NODO HIJO
let h1_antiguo = document.querySelector('.adios')
let h1_nuevo = document.createElement('H1')
h1_nuevo.innerHTML = 'JA'

saludar.replaceChild(h1_nuevo,h1_antiguo)
// REMOVIENDO UN NODO HIJO
saludar.removeChild(h1_nuevo)