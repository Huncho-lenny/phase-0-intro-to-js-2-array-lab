// Declare the global cats array
let cats = ["Milo", "Otis", "Garfield"];

// Functions that modify the original array (destructive)
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Functions that return a new array without modifying the original (non-destructive)
function appendCat(name) {
  return [...cats, name]; // Returns a new array with the name added at the end
}

function prependCat(name) {
  return [name, ...cats]; // Returns a new array with the name added at the beginning
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without the last cat
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array without the first cat
}

