const me = {
  name: "Viktor",
  age: 32,
  height: 185,
  hair: "brun",
  glasses: true,
  hobbies: ["golf" , "movies" , "hiking", "biking", "learning to code"]
};

const cats = [
  {
    name: "Batman",
    colour: "Black",
    age: 15,
    friendly: true,
    fav_foods: ["butter" , "fries", "tuna juice", "poultry"]
  },
  {
    name: "Luna",
    colour: "Black",
    age: 4,
    friendly: true,
    fav_foods: ["tuna juice" , "cheetos", "poultry", "kibble"]
  }
];

//Accessing whole object//
const accessObject = (object) => console.log(object);

accessObject(me);



console.log("-----------")
console.log("-----------")



//Accessing whole property within object//
//Diffiulties logging whole property => seems like you cannot return the key and value combined easily without some sort of loop.
//Difficulties logging just key "name" => trying to log "first" key in object BUT objects are not ordered.  If you don't know what key you're looking for, you have to iterate through them all with a for...in loop.
const accessProperty = (object) => {
  for (let key in object) {
    console.log(`For this property key = ${key} and value = ${object[key]}`)
  }
};

accessProperty(me);



console.log("-----------")
console.log("-----------")



//Accessing value only by key//
//Fairly straight forward, need to remember that keys are strings though, not defined variables.
const specificValue = (object, key) => console.log(object[key]);

specificValue(me, "hobbies");

console.log("-----------")
console.log("-----------")


//Accessing ALL values within an object//
//Straight forward, must use for...in loop to iterate
const allValues = (object) => {
  for (let key in object) {
    console.log(object[key]);
  }
};

allValues(me);



console.log("-----------")
console.log("-----------")



//Searching through an object for a specific value, returning key.  If no value, return "Value not found"
const findValueReturnKey = (object, value) => {
  for (key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return "Value not found"
};

console.log(findValueReturnKey(me, 33));



//STILL TO PRACTICE//
//Accessing elements in an array that is a value in your object.  Returning key or returning index of that value within that array
//Accessing object that is an element in an array of objects
//Accessing key in object that is an element in an array of objects
//Accessing value in object that is an element in an array of objects
//Searching for specifc key and returning value from an object that is an element in an array of objects
//Searching for specific value and returning key from an object that is an element in an array of objects (Last nights task??)
//Searching for specific element in array which is a value from an object that is an element in an array of objects (Hard to wrap mind around)
