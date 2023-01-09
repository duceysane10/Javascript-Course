/* Arrays:
waxaa la is tixmaalaa badalka variable, Sababtoo ah arraydu waxay keedin kartaa xog badan oo kala nooc ah */

// examples

let animal = ["ari","ido","geel","lo"];

console.log(animal[2]); // accesing array
console.log(animal.length); // geting array of length
console.log(animal); // printing alla items in the array


/// Adding item in to the Array we use push
animal.push('door');
console.log(animal); 

/// Removing item in to the Array we use pop : pop removes last item
animal.pop();
console.log(animal); 

// what about if i wan to add an item for the firs or remove for the first
// adding item for front we use unshift
animal.unshift('dooro');
console.log(animal); 

// Removing item for front we use shift
animal.shift()
console.log(animal); 

//removing specif we use "splice" item:  waxaa waa jiba kow inaad soo heshid positionka itemka la tiraayo
let pos = animal.indexOf("geel");
animal.splice(pos,1); // 1 halka waa keliya itemkaas tir hadii aad 2 ka dhigtid wuxuu tiri doonaa labo item asiga iyo kan ku xiga
console.log(animal);


// Loop through Array
let qudaar = ["cambe","moos","canuuni","Qare","Saytuun"];
qudaar.forEach(function($item){
    console.log($item)
});
