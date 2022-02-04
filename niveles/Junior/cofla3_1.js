class celulares{
    constructor(color,peso,rp,rc,ram){
        this.color = color;
        this.peso = peso;
        this.rp = rp;
        this.rc = rc
        this.memoria = ram
        this.estado=false
    }
    prender(){
        if(this.estado==false){
            document.write('prendiendo...')
            return this.estado == true
        }else{
            document.write('celular se encuentra prendido')
        }
    }
    reiniciar(){
        if(this.estado){
            document.write('reiniciando...')
        }
    }
    apagar(){
        if(this.estado){
            document.write('Apagando...')
        }else{
            document.write('celular se encuentra apagado')
        }
    }
    fotos(){
        if(this.estado){
            document.write(`tomado fotografia en resolucion ${this.rc}`)
        }
    }
    video(){
        if(this.estado){
            document.write(`grabado video en resolucion ${this.rc}`)
        }
    }
    info(){
        return `
        Color: ${this.color}<br>
        Peso: ${this.peso}<br>
        R_pantalla: ${this.rp}<br>
        R_camara: ${this.rc}<br>
        Memoria: ${this.memoria}<br>
        `
    }
}

class gama extends celulares{
    constructor(color,peso,rp,rc,ram,rce){
        super(color,peso,rp,rc,ram)
        this.rce = rce
    }
    videloLento(){
        if(this.estado){
            document.write('grabando en camara lenta')
        }
    }
    facial(){
        if(this.estado){
            document.write('reconocimiento facial')
        }
    }
    infoGama(){
        return this.info()+`R_camara_extra: ${this.rce}<br>`
    }
}

const c1 = new gama('rojo','150g','5','full HD','1GB','200');
const c2 = new celulares('negro','155g','5.4','4K','10GB');

document.write(`${c1.infoGama()}<br>`)
document.write(`${c2.info()}<br>`)