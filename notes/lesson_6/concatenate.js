//concatenar arrays
	//1er metodo
	lista1 = ["a", "b", "c"];
	lista2 = ["d", "e", "f"];
	lista3 = lista1.concat(lista2);
	console.log(lista3);

	//2do metodo factor de propagacion IMPORTANTISIMO
	// las mostrara por consola sin corchetes ni comas.
	var lista4 = [...lista1, ...lista2];
    console.log(lista4);
	