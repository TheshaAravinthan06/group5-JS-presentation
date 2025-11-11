let leoMovie = {
  title: "Leo",
  actor: "Vijay (Thalapathy Vijay)",
  director: "Lokesh Kanagaraj",
  releaseYear: 2023,
  genre: ["Action", "Thriller", "Crime"],
  boxOfficeStatus: "Blockbuster",
  isLCU: true // Is part of the Lokesh Cinematic Universe
};

console.log(`My favorite actor in "${leoMovie.title}" is ${leoMovie.actor}.`);
console.log(`It was directed by ${leoMovie.director}.`);
console.log (leoMovie)


// jurassicWorldRebirth object definition

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




let name=true;
if(name){
  console.log("the value is true");
} else {
  console.log("the value is false");
}
 let num1=15;
  let num2=10;
  if(num1>num2){
    console.log("num1 is greater than num2");
  } else {
    console.log("num2 is greater than num1");
  }git checkout -b feature/thivi/object

