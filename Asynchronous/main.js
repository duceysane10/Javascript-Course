/* =================================
=== Geting Post using API 
====================================*/
// function getPosts(resource){
//     // XML Request
//     // waxan abuuranay varible noo haayo XMLhttp request
//     let Request = new XMLHttpRequest();
//     // Si aan uhelno xaaldaha uu maraayo requestigeena waxaan ku xeranay Event llistner ah readystatechange
//     Request.addEventListener('readystatechange', () =>{
//         // if taan hoose waxay hubineesaa in readyState ku yahay Done oo la dhameeyay una taagan 4 sidoo kalena ststusku yahay 200 micnaheedu yahay sccess
//         if(Request.readyState == 4 && Request.status == 200){
//             // varibalke hoos aan ku abuuranay waxaan ku shubanay xogta aan API ka helnay oo aan ubadalnay JSON format
//            let data = JSON.parse(Request.responseText)
//             console.log(data);
//         }
//         else if(Request.readyState == 4 ){
//             console.log("Not found")
//         }
        
//     })

//     // API ayaan furnay
//     Request.open('GET',resource);
//     // Api ayaan dirany codsigiisa
//     Request.send()
// }
// getPosts('https://jsonplaceholder.typicode.com/posts/')


// ----------------------------------------------------------------------------------------------------------------



/* =================================
=== Geting Post using our JSON posts file
====================================*/
// function getPosts(resource){
//     // XML Request
//     // waxan abuuranay varible noo haayo XMLhttp request
//     let Request = new XMLHttpRequest();
//     // Si aan uhelno xaaldaha uu maraayo requestigeena waxaan ku xeranay Event llistner ah readystatechange
//     Request.addEventListener('readystatechange', () =>{
//         // if taan hoose waxay hubineesaa in readyState ku yahay Done oo la dhameeyay una taagan 4 sidoo kalena ststusku yahay 200 micnaheedu yahay sccess
//         if(Request.readyState == 4 && Request.status == 200){
//             console.log(Request.responseText);
//         }
//         else if(Request.readyState == 4 ){
//             console.log("Not found")
//         }
        
//     })

//     // API ayaan furnay
//     Request.open('GET',resource);
//     // Api ayaan dirany codsigiisa
//     Request.send()
// }
// getPosts('./posts.json')

// ------------------------------------------------------------------------------------------------------------------



/* =================================
=== CallBack
====================================*/
// Call Back Ayaan Ku falan qeyn doonaa qeybtaan Hoose
// CallBack : Waa function laga dhax wacaayo function kale

// Exapmle 1 Callback function
    // function sgouldPrintFirst(CallBack){
    //     setTimeout( () => {
    //         console.log('first');
    //         CallBack();
    //     },1000)
    // }
    // function sgouldPrintSecond(){
    //     console.log('Second')
    // }
    // sgouldPrintFirst(sgouldPrintSecond);
// -------------------------------------------------------------------------------------------------------------------------

// Exapmle 2 Callback function

// function Addition(num1,num2,CallBack){
//     let result;
//     setTimeout(() => {
//         result = num1 + num2
//         CallBack(result)
//     }, 1000);
// }

// function result (value){
//     console.log(`the sum numbers is: ${value}`)
// }
// Addition(20,40,result)
// ---------------------------------------------------------------------------------------------------------------------


/* =================================
=== CallBack Hell 
====================================*/

// function CallBackhell(){
//     setTimeout(() =>{
//         console.log('first');
//         setTimeout(() =>{
//             console.log('Secon');
//             setTimeout(() =>{
//                 console.log('Third');
//                 setTimeout(() =>{
//                     console.log('fourth');
//                 },200)
//             },400)
//         },800)
//     },1000)
// }

// CallBackhell()
// ---------------------------------------------------------------------------------------------------------------------


/* =================================
=== Promises
====================================*/
// Exapmle 1

// let condition = false

// const getPromises = new Promise((resolve,reject) => {
//     if(condition){
//         resolve("Xogta waa la helay")
//     }else{
//         reject("Xogta lama helin")
//     }
// });
// // Calling
// getPromises.then(success =>{
//     console.log(success)
// }).catch(err =>{
//     console.log(err)
// })
// --------------------------------------------------------------------------------------------------------------
// Exapmle 2 Promise using Sending HTTP Request Api test

// function getPromisesPosts(resource){
//     return new Promise((resolve,reject) => {
//         let request = new XMLHttpRequest()
//         request.addEventListener('readystatechange',() => {
//             if(request.readyState === 4 && request.status === 200){
//                 resolve(request.responseText);
//             }
//             else if (request.readyState === 4){
//                 reject("Some thing Has been Occur");
//             }
//         })
//         request.open('GET',resource);
//         request.send()
//     })
// }

// getPromisesPosts('https://jsonplaceholder.typicode.com/posts/1').then(success =>{
//     console.log("promise resolved :",success)
// }).catch(err =>{
//     console.log("Promise reject :",err)
// });
// ------------------------------------------------------------------------------------------------------------------
// Exapmle 3 Chaining Promises using Sending HTTP Request  Morethen one API as Callback
// function getPromisesPosts(resource){
//     return new Promise((resolve,reject) => {
//         let request = new XMLHttpRequest()
//         request.addEventListener('readystatechange',() => {
//             if(request.readyState === 4 && request.status === 200){
//                 resolve(request.responseText);
//             }
//             else if (request.readyState === 4){
//                 reject("Some thing Has been Occur");
//             }
//         })
//         request.open('GET',resource);
//         request.send()
//     })
// }

// getPromisesPosts('https://jsonplaceholder.typicode.com/posts/1').then(success =>{
//     console.log("Post 1:",success);
//     return getPromisesPosts('https://jsonplaceholder.typicode.com/posts/1?userId=3')
// }).then(success =>{
//     console.log("Post 1 for  user 3 :",success);
//     return getPromisesPosts('https://jsonplaceholder.typicode.com/posts/1/comments/?id=1')
// }).then(success =>{
//     console.log("Comment 1 for  Post 1  :",success);
// }).catch(err =>{
//     console.log("Promise reject :",err)
// });
// -----------------------------------------------------------------------------------------------------------------

/* =================================
=== The Fetch API
====================================*/
// fetch('https://jsonplaceholder.typicode.com/posts/1').then(Response =>{
//     return Response.json() //return taan waxay soo celineesaa Promise Data oo ama noqon doonto resolved or rejected 
// }).then(data => {
//     console.log("Post 1",data)
// }).catch(err =>{
//     console.log("Promise reject :",err)
// });
// ---------------------------------------------------------------------------------------------------------------------

/* =================================
=== Async & Await?
====================================*/

const getData = async () => { // we create Async funtion and it always return promise data
    const request = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    const response = await request.json();

    return response; //returns promise Data
};
getData()
        .then(resolved => console.log("Post 1",resolved))
        .catch(err =>console.log("Not Found",err.message));