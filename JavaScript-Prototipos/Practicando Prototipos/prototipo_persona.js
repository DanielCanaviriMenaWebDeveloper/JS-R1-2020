function Persona(nombre, apellido, edad, direccion, ci, profesion)
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.direccion = direccion;
    this.ci = ci;
    this.profesion = profesion;

    this.datos = function(){
        console.log(`${this.nombre} ${this.apellido} tiene ${this.edad}`);
    }
}   


persona1 = new Persona("Daniel", "Canaviri", "37", "Santa Cruz", "6034532LP", "Ingeniero de Sistemas.");

persona1.datos();

Persona.prototype.mostrarEdad = function(){
    console.log(`La edad de ${this.nombre} es ${this.edad} años.`);
}

Persona.prototype.estadoCivil = null;

Persona.prototype.mostrarEstadoCivil = function(estado = "Soltero"){
    this.estadoCivil = estado;
    console.log(`${this.nombre} esta ${estado}. ${this.estadoCivil}`);
}
persona1.mostrarEdad();
persona1.mostrarEstadoCivil("Comprometido");
persona1.mostrarEstadoCivil();