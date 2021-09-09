const person = {
  name: 'Jon',
  lastname: 'Doe',
  age: 30,
  nationality: 'American',
  getName() {
    return `Jon Doe`;
  }
};
const numbers = [2, 4, 6, 8, 10];

const { getName, name, age, nationality, alias = 'guest' } = person; // Destructuración de un objeto

console.log(getName());
console.log(age);
console.log(nationality);
console.log(alias);
console.log(person.getName());

const [two, four, , , ten] = numbers; // Forma de destructurar un arreglo

console.log(two);
console.log(four);
console.log(ten);
