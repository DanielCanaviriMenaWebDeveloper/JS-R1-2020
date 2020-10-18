var Animal = {
    tipo: "Perro",
    color: "Blanco",
    edad: 2,

    /*
    diHola: function(){
        console.log('Hola desde Animal object');
    }
    */
}

console.log(Animal);

Animal.__proto__.diHola = function(){
    console.log('Hola desde Animal.__proto__');
}

/* 
    Si no encuentra la función llamada "diHola" en el objeto, lo buscara en el prototipo de este.
*/
Animal.diHola(); 

// Otro Ejemplo

var myObjectNumber = {
    getNumber: function(){
        return this.number; 
    }
}

var a = {
    number: 22,
    __proto__: myObjectNumber
}

var b = {
    number: 50,
    __proto__: myObjectNumber
}

console.log(a.getNumber());
console.log(b.getNumber());