//Selecting Element using by Tag
//By tag
// labadaan line hoose wexee soo qabanaayan h1 elemtiga ku jiro indexedDB.html kedibna waxa ku qoran ayeey kusoo bandhigaayaan console ka 
let element = document.querySelector("h1");
console.log(element);

//by id
let element1 = document.querySelector("#element1");
console.log(element1);

//by class
let element2 = document.querySelector(".element2");
console.log(element2);


// Another Ways We can select

let el1 = document.getElementById("element1");
console.log(el1);

//get elemenst by Tag name waxaa loo isticmaalaa marka elemntga aad weceeso dhowr xabo ay yihiin kuli ayuuna kuu soo daawici doonaa as an Array ahaan
let el2 = document.getElementsByTagName("h1");
console.log(el2);

// sidoo kale getElemtsBytage name mid kamida waad select gareen kartaa adigoo sheegaayo index ka arrayda uu ugu jiro elementigaas tusaalaha hoose fiiri
let el4 = document.getElementsByTagName("h1")[0]; //index 0 wan keliya ayuu soo qaban doonaa sadxada h1 oo dhan
console.log(el4);

//Sidoo kale elemntiyo badan waan wada select gareen karnaa inagoo adeegsaneeno document.getElementsByClassName
let el5 = document.getElementsByClassName("success")
console.log(el5);

// Finding HTML Elements by CSS Selectors
// This example returns a list of all <p> elements with class="main".
const x = document.querySelectorAll("p.main");
// -----------------------------------------------------------------------------------------------------------------------
// Creating new Element
let newElement = document.createElement("p");
//adding content to the new element
let content = document.createTextNode("I am New Element");
//Sidee loogo daraa xogtta kore elemntiga aan soo abuuranay waxaan is ticmaaleenaa append()
newElement.appendChild(content);
console.log(newElement);

// displaying new elemnt to the document
 let main = document.querySelector(".main");
 main.appendChild(newElement);

 //Removing elemnto from The Docoment
newElement.remove();
// -----------------------------------------------------------------------------------------------------------------

// Adding Style  
let dev = document.querySelector("#dev");
dev.classList.add("succes");

//Removing Style
dev.classList.remove("succes");

// another way of adding Style

let p = document.querySelector("p");
p.style.fontSize ="20px";
p.style.fontWeight= "bold";
p.style.color ="blue";

// --------------------------------------------------------------------------------------------------------------
// Changing the Value of an Attribute
// Syntex: document.getElementById(id).attribute = new value
let img = document.getElementById("img");
img.addEventListener("mouseover",() => {
    img.src ="duco.jpg";
});
img.addEventListener("mouseleave",() => {
    img.src ="d.jpg";
});

// ----------------------------------------------------------------------------------------------------------------
/*
DOM Events (MOUSE EVENT)
*/

// Mouse Clicked Event
let button = document.querySelector("#button");
button.addEventListener("click" ,() =>{
    alert("Clicked");
});

//mouseover Event
button.addEventListener("mouseover" ,() =>{
    button.style.fontSize="18px";
    button.style.background="green";
    button.style.color="#fff"
    
});

//mouseLeave Event
button.addEventListener("mouseleave" ,() =>{
    button.style.fontSize="18px";
    button.style.background="#fff";
    button.style.color="#000"
    
});
// -------------------------------------------------------------------------------------------------------------

/*
DOM Events (Keyboard EVENT)
*/
//   1. onkeydown: This event is triggered when the user is pressing a key

let typing = document.querySelector("#typing");

// typing.addEventListener('keydown', (event)=> {
//     let keyName = event.key;
//     let keyCode = event.keyCode;
//     //  Alert the key name and key code on keyup 
//   alert(`Keyup: The key pressed is ${keyName} and the code value is ${keyCode}`);
// });

// 2. onkeypress: This event is triggered when the user presses a key.
typing.addEventListener('keyup', ()=> {
    let clon = document.querySelector("#clone")
    clon.innerHTML = typing.value;
});

// 3. onkeyup: This event is triggered when the user releases a key.
// typing.addEventListener('keypress', (event)=> {
//     let keyName = event.key;
//     let keyCode = event.keyCode;
//      // Alert the key name and key code on keyup
//   alert(`Keyup: The key keyuped is ${keyName} and the code value is ${keyCode}`);
// });