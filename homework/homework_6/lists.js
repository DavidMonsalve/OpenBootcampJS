shoppingList = ["eggs", "milk", "water", "bread", "apples"];
console.log(shoppingList);

//adding Sunflower Oil to the list.

shoppingList.push("Sunflower Oil");
console.log(shoppingList);

//Re-modifies the shopping list by removing "Sunflower Oil"

shoppingList.pop();
console.log(shoppingList);

//A list of your 3 favorite movies (objects with properties: title, director, date)

myFavoriteMovies = [
    {title: `Scarface`, director: `Brian De Palma`, release: 1984},
    {title: `The Godfather`, director: `Francis Ford Coppola`, release: 1972},
    {title: `Star Wars: The Revenge of Sith`, director: `George Lucas`, release: 2005},
]
console.log(myFavoriteMovies);

//A new list containing movies after January 1, 2010 (using filter)

const MoviesAfter2010 = myFavoriteMovies.filter(movies => movies.release > 2009);
console.log(MoviesAfter2010);

//A new list containing the directors from the original movie list (using map)

arrayDirectors = myFavoriteMovies.map((aux_director) => aux_director = aux_director.director);
console.log(arrayDirectors);

//A new list containing the titles from the original movie list (using map)
arrayTitles = myFavoriteMovies.map((aux_titles) => aux_titles = aux_titles.title);
console.log(arrayTitles);

//A new list that concatenates the list of directors and the list of titles (using concat)

arrayConcat = arrayDirectors.concat(arrayTitles);
console.log(arrayConcat);
    
//A new list that concatenates the list of directors and the list of titles (using the spread factor)
    
arrayConcat2 = [...arrayDirectors, ...arrayTitles];
console.log(arrayConcat2);
    