// this is an IIFE (Immediately Invoked Function Expression)
// also called the Module pattern
//
(() => { // shorthand function declaration (also called a fat arrow function)
  console.log('fired!');

  // select elements here
  let theBadge = document.querySelector(".badge"),
      svgBadge = document.querySelector("svg");
  // debugger; // pause your code execution here

  // functions go in the middle
  function logID() {
    console.log("clicked on a graphic - this one: ", this.id);
  }

  // event handling
  theBadge.addEventListener("click", logID);
  svgBadge.addEventListener("click", logID);
})();
