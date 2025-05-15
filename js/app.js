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
        return `${this.nombre} - ${this.peso} kg - ${this.edad} año(s) - ${this.raza}`
    }
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
    informacion(){
        return `${this.nombre} - ${this.peso} kg - ${this.edad} año(s) - ${this.sexo}`
    }
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;
    }
    informacion(){
        return `${this.nombre} - ${this.peso} kg - ${this.edad} año(s) - ${this.color}`
    }
}

let perro1 = new Perro('Zarze', 30, 6, 'Pitbull');
let gato1 = new Gato('Hayley', 5, 10, 'Hembra');
let conejo1 = new Conejo('Canelita', 4, 5, 'Marron');

let animales =[perro1, gato1, conejo1];

function mostrarAnimales(){
    let lista = document.getElementById('listaAnimales');

    for( let animal of animales){
        let item = document.createElement('li');
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }
}