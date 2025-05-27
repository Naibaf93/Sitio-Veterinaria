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

let perro1 = new Perro('Zarze', 30, 6, 'Stanford pitbull');
let gato1 = new Gato('Hayley', 5, 10, 'Hembra');
let conejo1 = new Conejo('Canelita', 4, 5, 'Marron');
let perro2 = new Perro('Gatsby', 32, 11, 'Pitbull');
let gato2 = new Gato('Momo', 6, 2, 'Macho');
let conejo2 = new Conejo('Copito', 5, 6, 'Blanco');
let perro3 = new Perro('Moloch', 28, 2, 'American Pitbull Terrier');

let animales =[perro1, gato1, conejo1, perro2, gato2, conejo2, perro3];

function mostrarAnimales(){
    let lista = document.getElementById('listaAnimales');

    for( let animal of animales){
        let item = document.createElement('li');
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }
}