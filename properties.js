// jurassicWorldRebirth nested object definition

let jurassicWorldRebirth = {
  // Key           : Value
  title            : "Jurassic World Rebirth",
  releaseYear      : 2025,
  director: {
    firstName:"Nike",
    lastName:"Anna"
  },       
  isReleased       : true,
  leadCast         : ["Scarlett Johansson", "Jonathan Bailey", "Mahershala Ali"],
  plotSummary      : "A team goes to a remote island to extract dinosaur DNA for medicine, but things go wrong.",
  locationFilmedIn : { // A nested object for location data
      country1: "Thailand",
      country2: "Malta"
  }
};
console.log(jurassicWorldRebirth);
console.log(jurassicWorldRebirth.director.firstName);


let car={
  brand:"Nexon",
  model:"Tata",
  price:25000,
  color:"Blue"
};

console.log(car);

//perticular value
console.log(car.model);

//delete properties
car["modelYear"]=2024;
console.log(car);

//change the value of key
car["color"]="Red";
console.log(car);

//best practice
car.color="Red";
console.log(car);

//delete properties
delete car.price;
console.log(car);






