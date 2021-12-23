const hola = (nombre) =>{
//    return "hola soy " + nombre; 
   return `hola soy ${nombre}`;
 
}

const randomNumber = () => {
    
    return Math.round(Math.random() * 100);
}

const otraRandomNumber = () => {
    
    return Math.round(Math.random() * 100);
}


module.exports =  { hola , randomNumber, otraRandomNumber }

// export { hola , randomNumber }
// export default funciones ;
