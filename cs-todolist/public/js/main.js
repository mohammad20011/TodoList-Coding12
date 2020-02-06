let body = document.querySelector("body")
let input1 = document.getElementsByClassName("form-control")[0]

//Déclaration boutton ajouter
let buttonAjouter = document.getElementsByClassName("btn")[0]
buttonAjouter.setAttribute("type", "button")


//Autres bouttons
let buttonAll = document.getElementsByClassName("btn")[4]
buttonAll.style.backgroundColor = "blue"
buttonAll.style.color = "white"

let buttonDeleted = document.getElementsByClassName("btn")[3]
buttonDeleted.style.backgroundColor = "blue"
buttonDeleted.style.color = "white"

let buttonTodo = document.getElementsByClassName("btn")[1]
buttonTodo.style.backgroundColor = "blue"
buttonTodo.style.color = "white"







let boxBody = document.getElementsByClassName("box-body")[0]
let ul = document.getElementById("list all")
boxBody.appendChild(ul)

//Bouton ajouter
buttonAjouter.addEventListener("click", () => {
  if(input1.value != ""){
    // input1.focus()
    let li = document.createElement("li")
    ul.appendChild(li)
    let p = document.createElement('p')
    li.appendChild(p)
    p.innerText = input1.value
    p.style.margin = 0
    p.style.fontSize = "28px" 
    li.style.backgroundColor = "grey"
    li.style.alignItems = "center"
    li.style.display = "flex"  
    li.style.padding = "25px"

    //La div
    let div = document.createElement("div")
    div.style.marginLeft = "755px"
    li.appendChild(div)

//button1
let button1 = document.createElement("i")                                                                             
button1.setAttribute("class", "fas fa-2x fa-check-circle") 
button1.style.color = "blue"
button1.style.marginRight = "17px"
button1.value = "ON"
button1.addEventListener("click", ()=>{
  console.log(button1.value)
  switch(button1.value){
    case "ON":
      li.style.backgroundColor = "green"
      button1.value ="OFF"
      break; 
      case "OFF": 
      li.style.backgroundColor = "grey"
      button1.value ="ON"
      break;
    }
  })
    
let button2 = document.createElement("i")
button2.setAttribute("class", "fas fa-2x fa-edit")
button2.style.color = "yellow"
button2.style.marginRight = "17px"
// button2.style.marginRight = "15px"
button2.addEventListener("click", ()=>{
  // button1.style.display = "none"
  // button3.style.display = "none"
  // button2.style.display="none"
  div.style.display="none"
  // button2.style.marginLeft = "905px"
  li.style.backgroundColor = "grey"

  //input2
  let input2 = document.createElement("input")
  li.appendChild(input2)
  input2.value = p.innerText
  input2.style.fontSize = "28px" 
  // input2.style.marginLeft = "0"

  //buttonSave
  let buttonSave = document.createElement("i")
  buttonSave.setAttribute("class", "fas fa-2x fa-save")
  buttonSave.style.color = "green"
  buttonSave.addEventListener("click", ()=>{
    li.innerText = input2.value
    li.style.fontSize = "28px"
    div.style.display = 'initial'
    button1.style.display = "initial"
    div.style.fontSize = "16px"
    li.appendChild(div)
  })
  li.appendChild(buttonSave)
  p.style.display = 'none'
})


let button3 = document.createElement("i")
button3.setAttribute("class", "fas fa-2x fa-trash-alt")
button3.style.color = "red"
button3.addEventListener("click", ()=>{
  button1.style.display = "none"
  button3.style.marginLeft = "102px"
  button2.style.display = "none"
})
div.append(button1, button2, button3)
console.log(div);

// li.append(button1, button2, button3)  
  } else { }

  let buttonDone = document.getElementsByClassName("btn")[2]
buttonDone.setAttribute("type", "button")
buttonDone.style.backgroundColor = "blue"
buttonDone.style.color = "white"

//Filtres

//Todo

buttonTodo.addEventListener("click", () =>{

  if (li.style.backgroundColor == "green") {

  li.style.display = "none"

  } else {

  li.style.display = ""

  }

})

//Done

  buttonDone.addEventListener("click", () =>{

   if (li.style.backgroundColor != "green") {

     li.style.display = "none"

     } else {

      li.style.display = ""

  }

 })

//      // BOUTON ALL

buttonAll.addEventListener("click", () =>{

  li.style.display = ""

}

)

})

