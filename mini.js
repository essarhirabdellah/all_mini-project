// The HTML and CSS are ready (index.html, style.css): you only write JavaScript.
const list = document.querySelector("#todo-list");
const count = document.querySelector("#todo-count");

let tasks = [
  { id: 1, title: "Read the DOM chapter", done: true },
  { id: 2, title: "Practise filter()", done: false },
  { id: 3, title: "Build the todo list", done: false },
];

function renderTasks() {
    //git ul list
    let mylist = document.querySelector("#todo-list")
     mylist.innerHTML=""

  for(let task of tasks){
    
//    let newln = document.createElement('li')
    if(task.done === true){
      mylist.insertAdjacentHTML("beforeend",`
        <li>
         <input type="checkbox" checked>
         <span>${task.title}</span>
         <button>x</button>
        </li>

    `)
    }
    else{
        mylist.insertAdjacentHTML("beforeend",`
        <li>
         <input type="checkbox">
         <span>${task.title}</span>
         <button>x</button>
        </li>

    `)  

    }
    // mylist.append(newln)
  }
}
function active(){
 let input = document.querySelector('[data-filter="active"]')
 input.addEventListener("click",()=>{
     let mylist = document.querySelector("#todo-list")
     mylist.innerHTML=""
  for(let task of tasks){
    
//    let newln = document.createElement('li')
    if(task.done === false){
      mylist.insertAdjacentHTML("beforeend",`
        <li>
         <input type="checkbox">
         <span>${task.title}</span>
         <button>x</button>
        </li>

    `)
    }}

 rm()
 }

 )
}
function done_() {
    let input = document.querySelector('[data-filter="done"]')
 input.addEventListener("click",()=>{
     let mylist = document.querySelector("#todo-list")
     mylist.innerHTML=""
  for(let task of tasks){
    
//    let newln = document.createElement('li')
    if(task.done === true){
      mylist.insertAdjacentHTML("beforeend",`
        <li>
         <input type="checkbox" checked>
         <span>${task.title}</span>
         <button>x</button>
        </li>

    `)
    }}

 rm()
 }

 )
 
}
let input = document.querySelector('[data-filter="all"]')
 input.addEventListener("click",renderTasks)
function rm() {
    let all_li = document.querySelectorAll("li")
    for(let li of all_li){
        li.addEventListener("click",(e) => {
            
         if(e.target.tagName === "BUTTON"){
           x = e.target.previousElementSibling
           for(let elm of tasks){
            // console.log(elm.title,x.textContent)
              if (elm.title == x.textContent) {
                x.parentElement.remove()
                let indx = tasks.findIndex(el => el == elm)
                console.log(indx)
                tasks.splice(indx,1)
                console.log(tasks)
              }
           }
         }
        // console.log(e.target.previousElementSibling)
    })
}}

done_()
active()
renderTasks();
rm()

