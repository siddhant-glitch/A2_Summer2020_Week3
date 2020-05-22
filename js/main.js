// this is an IIFE (Immediately Invoked Function Expression)
// also called the Module pattern
//
(() => { // shorthand function declaration (also called a fat arrow function)
  console.log('fired!');

  // select elements here
  // querySelectorAll is a one-to-many selection -> find EVERY element that matches the selector
  let characterButtons = document.querySelectorAll("button"),
      mainHeading = document.querySelector("#mainHeading"),
      mainImage = document.querySelector(".hero");


   //debugger; // pause your code execution here

  // functions go in the middle
  function switchImage() {
    console.log("clicked on a button");

    let currentImage = this.dataset.character + ".jpg";

    mainImage.src = "images/" + currentImage;
  }

  // event handling
  characterButtons.forEach(button => button.addEventListener("click", switchImage));

})();
