objectList = [
  { nombre: "Leire", edad: 35},
  { nombre: "David", edad: 34},
  { nombre: "Miguel", edad: 28},
  { nombre: "Juan", edad: 3},
  { nombre: "Marta", edad: 29},
]

const listWithoutMiguel = objectList.filter(obj => obj.nombre !== "Miguel");
console.log(listWithoutMiguel);