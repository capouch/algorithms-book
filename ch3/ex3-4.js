load('./List.js');
load('./Customer.js');

function createArr(file) {
 var arr = read(file).split("\n");
 for (var i = 0; i < arr.length; ++i) {
 arr[i] = arr[i].trim();
 }
 return arr;
}

function displayList(list) {
  for (list.front(); list.hasNext(); ) {
    var listItem = list.next();
    if (listItem instanceof Customer) {
      print(listItem.name + ", " +
        listItem.movie);
     }
    else {
      print(listItem);
   }
 }
}

function checkOut(name, movie, movieList, customerList) {
  if (movieList.contains(movie)) {
    var c = new Customer(name, movie);
    customerList.append(c);
    movieList.remove(movie);
  }
  else {
    print(movie + " is not available.");
  }
}

var movies = createArr("films.txt");
var movieList = new List();
var customers = new List();
for (var i = 0; i < movies.length; ++i) {
 movieList.append(movies[i]);
}
print("Available movies: \n");
displayList(movieList);
putstr("\nEnter your name: ");
var name = readline();
putstr("What movie would you like? ");
var movie = readline();
checkOut(name, movie, movieList, customers);
print("\nCustomer Rentals: \n");
displayList(customers);
print("\nMovies Now Available\n");
displayList(movieList);
