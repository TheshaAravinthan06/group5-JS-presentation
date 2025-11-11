let leoMovie = {
  title: "Leo",
  actor: "Vijay (Thalapathy Vijay)",
  director: "Lokesh Kanagaraj",
  releaseYear: 2023,
  genre: ["Action", "Thriller", "Crime"],
  boxOfficeStatus: "Blockbuster",
  isLCU: true // Is part of the Lokesh Cinematic Universe
};

console.log(`My favorite actor in  ${leoMovie.title} is ${leoMovie.actor}.`);
console.log(`It was directed by ${leoMovie.director}.`);
console.log (leoMovie)


// jurassicWorldRebirth nested object definition

let jurassicWorldRebirth = {
  // Key           : Value
  title            : "Jurassic World Rebirth",
  releaseYear      : 2025,
  director         : "Gareth Edwards",
  isReleased       : true,
  leadCast         : ["Scarlett Johansson", "Jonathan Bailey", "Mahershala Ali"],
  plotSummary      : "A team goes to a remote island to extract dinosaur DNA for medicine, but things go wrong.",
  locationFilmedIn : { // A nested object for location data
      country1: "Thailand",
      country2: "Malta"
  }
};

console.log(jurassicWorldRebirth);
// theSecret book object definition
let theSecret = {
  // Key           : Value
  title            : "The Secret",
  author           : "Rhonda Byrne",
  publicationYear  : 2006,
  genre            : "Self-Help / Spirituality",
  coreConcept      : "The Law of Attraction",
  hasCompanionFilm : true,
  // arryay value use for  multiple languages
  languages        :["English", "Tamil", "Hindi", "Spanish", "French" ,"english"], 
};
console.log(theSecret);

// 1️⃣ Basic Object
const person = { name: "Thivi", age: 22 };
console.log("Object:", person.name);

// 2️⃣ Array Object
const fruits = ["apple", "banana", "mango"];
console.log("Array:", fruits[1]);

// 3️⃣ Date Object
const today = new Date();
console.log("Date:", today.toDateString());

// 4️⃣ Math Object
console.log("Math:", Math.sqrt(49));

// 5️⃣ String Object
const str = new String("Hello JS");
console.log("String:", str.toUpperCase());

// 6️⃣ Number Object
const num = new Number(123.45);
console.log("Number:", num.toFixed(1));

// 7️⃣ Boolean Object
const bool = new Boolean(false);
console.log("Boolean:", bool.valueOf());

// 8️⃣ Map Object
const map = new Map();
map.set("name", "Thivi");
map.set("city", "Jaffna");
console.log("Map:", map.get("name"));

// 9️⃣ Set Object
const set = new Set(["apple", "banana", "apple"]); // removes duplicate
console.log("Set:", set);

// 🔟 WeakMap Object
const obj1 = {};
const weakMap = new WeakMap();
weakMap.set(obj1, "secret");
console.log("WeakMap:", weakMap.has(obj1)); // true

// 11️⃣ WeakSet Object
const obj2 = {};
const weakSet = new WeakSet();
weakSet.add(obj2);
console.log("WeakSet:", weakSet.has(obj2)); // true

// 12️⃣ RegExp (Regular Expression)
const pattern = /js/i;
console.log("RegExp:", pattern.test("I love JS"));

// 13️⃣ Error Object
try {
  throw new Error("Something went wrong!");
} catch (err) {
  console.log("Error:", err.message);
}

// 14️⃣ Promise Object
const promise = new Promise((resolve) => {
  resolve("Promise resolved!");
});
promise.then((result) => console.log("Promise:", result));

// 15️⃣ Function Object
function greet() {
  console.log("Hello from Function!");
}
greet();




