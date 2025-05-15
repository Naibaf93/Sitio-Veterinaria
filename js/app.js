class Animal{
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg - ${this.edad} año(s)`
    }
}

class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }
    informacion(){
        return `${this.nombre} - ${this.peso} kg - ${this.edad} año(s)- ${this.raza}`
    }
}