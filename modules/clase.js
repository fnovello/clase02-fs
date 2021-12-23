class Persona{
 
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    setNombre(nombre){
        this.nombre = nombre; 
    }

    saludar(){
        return "hola soy " + this.nombre + " y tengo "  + this.edad
    }

    inspeccionar(){
        console.log(this);
    }

}

module.exports = Persona