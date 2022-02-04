class aplicacion{
    constructor(descargas,puntuacion,peso){
        this.cantidad = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada==false && this.instalada==true){
            document.write('abriendo aplicacion')
            this.iniciada = true
        }
    }
    cerrar(){
        if(this.iniciada && this.instalada==true){
            document.write('cerrando aplicacion')
            this.iniciada = false
        }
    }
    instalar(){
        if(this.instalada==false){
            document.write('Instalando aplicacion')
            this.instalada = true
        }
    }
    desinstalar(){
        if(this.instalada){
            document.write('Desinstalando aplicacion')
            this.instalada = false
        }
    }
}

const app = new aplicacion('16.000','5 estrellas','900mb');
app.instalar();
app.desinstalar();
app.abrir();
app.cerrar();