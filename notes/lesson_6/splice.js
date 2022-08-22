array = ["car", "house", "kids", "dogs", "toys"];
console.log("original list", array);

//eliminar, modificar o añadir valores
//delete, modify or add elements

	//eliminar - delete
	// array.splice(indiceInicial, cantValEliminar)

console.log("DELETING TWO ELEMENTS");
array.splice(2, 2);
console.log(array);


	//another example: 
console.log("DELETING ANOTHER ELEMENT");
array2 = ["a", "b", "c", "d"];
array2.splice(1, 3);
console.log(array2);




	//añadir
	//array.splice(start, numberElementsToRemove, ElementoAañadir)
console.log("ADDING AN ELEMENT");
array = ["car", "house", "kids", "dogs", "toys"];
console.log(array);
array.splice(1, 0, "swords");
console.log(array);


	//modificar - modifying
	//array.splice(indiceInicial, cantElemEliminar, elemNuevo)
console.log("MODIFYING THE LIST");
array = ["car", "house", "kids", "dogs", "toys"];
console.log(array);
array.splice(1, 1, "swords");
console.log(array);