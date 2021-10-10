var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength(){
   return input.value.length;
};

function addInput(){
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
   ul.appendChild(li);
   input.value = "";
};

function addListOnClick(){
   if (inputLength() > 0){
      addInput();
   };
};

function addListOnKeypress(event){
   if (inputLength() > 0 && event.keyCode == 13){
      addInput();
   };
};

button.addEventListener("click",addListOnClick);

input.addEventListener("keypress",addListOnKeypress);