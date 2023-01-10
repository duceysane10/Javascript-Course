// All elements
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const Password = document.querySelector("#Password")
const Confirm = document.querySelector("#Confirm")
const form = document.querySelector("#form")

// creating functions

//show Error messageFunction
const showError = (input,message) =>{
    
    let parentElement = input.parentElement;
    parentElement.classList.add("error")
    let small = parentElement.querySelector("small")
    small.innerHTML = message
}


// success message Function

const showSuccess = (input) =>{
    let parentElement2 = input.parentElement;
    parentElement2.classList.add("success")
    
}
//Check email function
const checkEmail = (email) =>{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mailformat.test(email.value)){
      showSuccess(email)
    }else{
        showError(email,"invalid Email")
    }
}

// check Empty Function
const checkEmpty = (elemnts) => {
    elemnts.forEach(element => {
        if(element.value === ''){
            showError(element,"input field Can't be Empty")
        }
        else{
            showSuccess(element)
        }
    });
}

//Checking Password Length
const checkpassword = (Password,min,max) =>{
    var lowerCaseLetters = /[a-z]/g;
    var UperCaseLetters = /[A-Z]/g;
    var number = /[0-9]/g;

    if(Password.value.match(lowerCaseLetters)) {
    }else{
        showError(Password,"Password must Have at least one lower case later")
    }
    if(Password.value.match(UperCaseLetters)) {
    }else{
        showError(Password,"Password must Have at least one Uper case later")
    }
    if(Password.value.match(number)) {
    }else{
        showError(Password,"Password must Have at least one Number")
    }
    if(Password.value.length < min){
        showError(Password,"Password Minimum 8")
    }else if(Password.value.length > max){
        showError(Password,"Password Maximum 15")
    }
    else{
        showSuccess(Password)
    }
}

// Check password confirm if they match

const checkConfirm = (Password,Confirm) =>{
    if(Confirm.value.match(Password.value)){
        showSuccess(Confirm)
    }else{
        showError(Confirm,"Password and Confirm did't Match")
    }
}

// Toggle Password Visibility
let eye = document.getElementById("showPassword")

eye.addEventListener("click",() =>{
    if(Password.type ==="password"){
        Password.type ="text"
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }
        else if(Password.type ==="text"){
            Password.type ="password"
            eye.classList.remove("fa-eye-slash");
            eye.classList.add("fa-eye");
        }
});

// Toggle Confirm Password Visibility
let eye2 = document.getElementById("showConfirm")
eye2.addEventListener("click",() =>{
    if(Confirm.type ==="password"){
        Confirm.type ="text"
        eye2.classList.remove("fa-eye");
        eye2.classList.add("fa-eye-slash");
    }
        else if(Confirm.type ==="text"){
            Confirm.type ="password"
            eye2.classList.remove("fa-eye-slash");
            eye2.classList.add("fa-eye");
        }
});

form.addEventListener("submit",(event)=>{
    event.preventDefault()//line kaan wuxuu noo qabnaa eventiga dhacaayo in inaga aan xukuno oo uusan horay ka cara rin
    // const usernameEr = document.querySelector("#usernameEr")
    // const emailEr = document.querySelector("#emailEr")
    // const passwordEr = document.querySelector("#passwordEr")
    // const confirmEr = document.querySelector("#confirmEr")

    // 1. checking if input is empty all conditions using if 

//     if(username.value === ''){
//         usernameEr.parentElement.classList.add("error")//username inputka paranetigiisa oo ah div ta ku dar class error ayuu utaagan yahay line kaas
//         usernameEr.innerHTML ="Username Required"
//     }else if(username.value !=="" ){
//         usernameEr.parentElement.classList.add("success")//username inputka paranetigiisa oo ah div ta ku dar class error ayuu utaagan yahay line kaas
//     }

//     if(email.value === ''){
//         emailEr.parentElement.classList.add("error")//username inputka paranetigiisa oo ah div ta ku dar class error ayuu utaagan yahay line kaas
//         emailEr.innerHTML ="Email Required"
//     }else if(username.value !=="" ){
//         emailEr.parentElement.classList.add("success")//username inputka paranetigiisa oo ah div ta ku dar class error ayuu utaagan yahay line kaas
//     }

//     if(Password.value === ''){
//         passwordEr.parentElement.classList.add("error")//username inputka paranetigiisa oo ah div ta ku dar class error ayuu utaagan yahay line kaas
//         passwordEr.innerHTML ="Password Required"
//     }else if(username.value !=="" ){
//         passwordEr.parentElement.classList.add("success")//username inputka paranetigiisa oo ah div ta ku dar class error ayuu utaagan yahay line kaas
//     }

    
//     if(Confirm.value === ''){
//         confirmEr.parentElement.classList.add("error")//username inputka paranetigiisa oo ah div ta ku dar class error ayuu utaagan yahay line kaas
//         confirmEr.innerHTML ="Confirm Password Required"
//     }else if(username.value !=="" ){
//         confirmEr.parentElement.classList.add("success")//username inputka paranetigiisa oo ah div ta ku dar class error ayuu utaagan yahay line kaas
//     }


  // 1. checking if input is empty all conditions using function

//   All Functions We call here
  checkEmpty([username,email,Password,Confirm])
  checkEmail(email)
  checkpassword(Password,8,15)
  checkConfirm(Password,Confirm)
})
