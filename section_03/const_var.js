var name = 'My name'; // Se genera una variable global
let lastName = 'My lastname'; // Variable en un ambito local
const age = 20; // No puede cambiar su valor

if (true) {
    var name = 'My other name'; // Sobreescribe la variable global
    let lastName = 'My other lastname'; // Se crea otra variable en este ambito
    // age = 30 // Esto genera un error
}

console.log(name);
console.log(lastName);
