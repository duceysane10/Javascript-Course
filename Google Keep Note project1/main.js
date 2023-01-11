let notearea = document.querySelector(".note-area")
let noteTxt = document.getElementById("noteTxt")
let notes = document.getElementById("notes")
let note = document.getElementById("note")

// when click noteArea open text erar
notearea.addEventListener("click",()=>{
    noteTxt.style.display="block"
    title.setAttribute("Placeholder","Title:")
})
   

// hideNoteare function
const hideNoteare = () => {
    noteTxt.style.display="none"
    title.setAttribute("Placeholder","Take Note....")
    title.value='';noteTxt.value='';
}

// Adding Note Function
let Addnote = (title,note) =>{
    notes.innerHTML += `<div class="note" id="note">
                            <h3 class="title-text" id="title-text">${title} </h3>
                            <p class="note-blog">${note}</p>
                            <i class="fa fa-trash" id="ishow"></i>
                        </div>`
}
// Adding Note to the local Storage
const AddnoteToLocalStorage = (note) =>{
    if(note.length < 0){
        return
    }
        let oldnote;
        if(localStorage.getItem("notes")===null){
            oldnote = []
        }
        else{
            oldnote = JSON.parse(localStorage.getItem("notes"))
        }
        oldnote.push(note)
        localStorage.setItem('notes',JSON.stringify(oldnote))
    }

// Geting all Notes from  the local Storage
const getnoteToLocalStorage = () =>{

        let oldnote;
        if(localStorage.getItem("notes")===null){
            oldnote = []
        }
        else{
            oldnote = JSON.parse(localStorage.getItem("notes"))
        }
       oldnote.forEach(note => {
        notes.innerHTML += `<div class="note" id="note">
                                <h3 class="title-text" id="title-text">${note[0]} </h3>
                                <p class="note-blog">${note[1]}</p>
                                <i class="fa fa-trash" id="ishow"></i>
                            </div>`
       });
    }

// Deleting Note FromLocal Stroga
let deleteFromLocalStrogae = (DeletedNote) =>{
    let oldnote;
    if(localStorage.getItem("notes")===null){
        oldnote = []
    }
    else{
        oldnote = JSON.parse(localStorage.getItem("notes"))
    }

    oldnote.map((note,index) => {
        if(note[0] == DeletedNote.children[0].textContent.trim() && note[1] == DeletedNote.children[1].textContent.trim()){
            oldnote.splice(index,1)
            return oldnote
        }
    })
    localStorage.setItem('notes',JSON.stringify(oldnote))

}

// hadii Banaanka la gujiyo Qari Note textiga
document.addEventListener("click",(event) => {
    let isClicked = notearea.contains(event.target);
    if(!isClicked){
        // All Calling FUnctions
        if(title.value.length === 0 && noteTxt.value.length ===0){
            return
        }else{
            Addnote(title.value,noteTxt.value)
            AddnoteToLocalStorage([title.value,noteTxt.value]) 
        }
        hideNoteare()
    }
})

// Hadii mouse ka la kor geeyo Noteka soo muuji claamda delete

document.addEventListener("mouseover",(event) => {
    if(event.target.classList.contains("note")){
        event.target.querySelector("i").classList.add("show")
    }
})
// Hadii mouse ka la ga kor qaado  Noteka soo muuji claamda delete
document.addEventListener("mouseout",(event) => {
    if(event.target.classList.contains("note")){
        event.target.querySelector("i").classList.remove("show");
    }
})
// Hadii mouse ka la gujiyo calaamada delete  Tir Note kaas
document.addEventListener("click",(event) => {
    if(event.target.classList.contains("fa-trash")){
        event.target.parentElement.remove()
        deleteFromLocalStrogae(event.target.parentElement)
    }
})


// Markuu pageka load gareesmo 
document.addEventListener("DOMContentLoaded",getnoteToLocalStorage)