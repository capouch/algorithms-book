function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(males, females) {
  var names = read("dancers.txt").split("\n");
  
  for (var i = 0; i < names.length; ++i) {
    names[i] = names[i].trim();
   }
  // Remove extra line
  names.splice(names.length-1,1);

  for (var i = 0; i < names.length; ++i) {
    var dancer = names[i].split(" ");
    var sex = dancer[0];
    var name = dancer[1];
    if (sex == "F") {
      females.enqueue(new Dancer(name, sex));
    }
    else {
      males.enqueue(new Dancer(name, sex));
    }
  }
}

function dance(males, females) {
 print("The dance partners are: \n");
 while (!females.empty() && !males.empty()) {
   person = females.dequeue();
   putstr("Female dancer is: " + person.name);
   person = males.dequeue();
   print(" and the male dancer is: " + person.name);
 }
 print();
}

