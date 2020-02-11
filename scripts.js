const myMessage = document.getElementById("myMessage");
//console.log(myMessage);

myMessage.addEventListener("click", greetings);
function greetings() {
  if(myMessage.innerHTML === "Click me") {
    myMessage.innerHTML = "Thanks!";
  } else {
    myMessage.innerHTML = "Click me!";
  }
}
