const Persona = {
    nombre:'',
    apellido:'',

    getNombre: function(){
        return this.nombre
    },

    setNombre(nombre){
        this.nombre = nombre; 
    },

    saludar: function(){
        return "Hola soy " + this.nombre
    }
}

module.exports = Persona