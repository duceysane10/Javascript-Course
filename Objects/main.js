/* Objets:
    Waa propertiga uu shey leeyahay sida sheyga astaamahiisa 
    Objects are variables too. But objects can contain many values.
    */

// examples

const person = {
    name: "duceysane",
    country: "somalia"
}
console.log(person);
//sidoo kale waxaa daawici kartaa propertigiisa mid kamida
console.log(person.name);

// sidoo kael object waad dhax gelin kartaa object kale 

const student = {
    name: "mohamed",
    class: "f4",
    address:{
        distrct:"deyniile",
        street: "warshadaha"
    }
}
console.log(student);
console.log(student.address);
//sidoo kale waxaa daawici kartaa objectiga kale propertigiisa mid kamida
console.log(student.address.street);


/* 
    Object Methods
    Objects can also have methods.
    Methods are actions that can be performed on objects.
*/
const student1 = {
    fname: "mohamed",
    lname: "Abdifitah",
    class: "f4",
    distrct:"deyniile",
    street: "warshadaha",
    hobies:["reading","playing","programing"],//Also objects we can add An array value
    fullname:function(){return 'Fullname: '+this.fname + " " + this.lname}, //Object Method
    address:function(){return 'Address: '+"District: "+this.distrct + " " + "street: "+this.street}
}
//calling Object method
console.log(student1.fullname());



/* 
    Array Objects:
    waxay naga saacidee in objects badan aan hal magac uga faa ideesanso
*/
const students = [{
    fname: "mohamed",
    lname: "Abdifitah",
    class: "f4",
    distrct:"deyniile",
    street: "warshadaha",
    hobies:["reading","playing","programing"],//Also objects we can add An array value
    fullname:function(){return 'Fullname: '+this.fname + " " + this.lname}, //Object Method
    address:function(){return 'Address: '+"District: "+this.distrct + " " + "street: "+this.street},
},
{
fname: "Mustaqiim",
lname: "Abdifitah",
class: "f3",
distrct:"deyniile",
street: "warshadaha",
hobies:["writing","watching","treating"],//Also objects we can add An array value
fullname:function(){return 'Fullname: '+this.fname + " " + this.lname}, //Object Method
address:function(){return 'Address: '+"District: "+this.distrct + " " + "street: "+this.street}
},
];
//calling Object method
console.log(students[1].class);

// Loop Through Objects
// Si aan aan iskugu xerno xuruufta iyo qimaha variblek noo wado waxaan is ticmaaleenaa calaamada tabka keyboradka ka koreesa ee ladhaho Backtick ``
students.forEach( (student) => {
    console.log(`Student Name: ${student.fname} \n Class ${student.class} \n hobies ${student.hobies}`);
});
    