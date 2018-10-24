//Storing data:
myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);

console.log("testJSON", myJSON);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
console.log(obj.age);// returns 31
console.log(obj.name);// returns John

// to modify:     person["name"] = "Gilbert";