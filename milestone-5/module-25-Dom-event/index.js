/* // what is event.target??? 6NoVideo
// js event loop
// Event.stopPropagation()
// Event delegation
// event loop[call stack,web apis,callback queue]
// what is callback function
// why dynamic value is vanish after reload

*/

// element add and remove start
document.getElementById("comment-btn").addEventListener("click", () => {
  let ul = document.getElementById("list-box");
  let dynamicLi = document.createElement("li");
  dynamicLi.innerText = "Hello mr sharif";
  ul.appendChild(dynamicLi);
});

document.getElementById("list-box").addEventListener("click", (event) => {
    if (event.target.tagName==='LI') {

   event.target.parentNode.removeChild(event.target);

        
    }
//    event.target.parentNode.removeChild(event.target);
//   event.target.innerText = "";
});
// element add and remove end



