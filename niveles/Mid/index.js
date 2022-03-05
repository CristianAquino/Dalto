class Personas{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const data = [
    ['A',1],
    ['B',2],
    ['C',3]
];

const p = []

for (let i = 0; i < data.length; i++) {
    p[i] = new Personas(data[i][0],data[i][1])
}

console.log(p)
