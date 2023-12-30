//--- Search Box ---//

// Storing the latest user input
let searchValue = "";

//get the seach icon and add an event listener
document.getElementById("navsearch").addEventListener("click", function () {
  //Change the display to flex showing the search box
  document.getElementById("searchbox").style.display = "flex";
});
//get the close icon and add an event listener
document.getElementById("closeInput").addEventListener("click", function () {
  //Change the display to none hiding the search box
  document.getElementById("searchbox").style.display = "none";
});

// Get the input element
var inputElement = document.querySelector(".searchbox__container input");

inputElement.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Get the user-entered text
    let userInput = inputElement.value;
    // Set the searchValue to the user-entered text
    searchValue = userInput;
    // Clear the input field
    inputElement.value = "";
    console.log(searchValue);
  }
});

//--- Search Box ---//

/*Hamburger-show*/
function toggleNave__hamburger() {
  const hamburger = document.querySelector(".nav__links-hamburger");
  const hamburgerImg = document.querySelector(".everything-box");

  hamburger.style.display =
    hamburger.style.display === "flex" ? "none" : "flex";
  hamburgerImg.style.display =
    hamburgerImg.style.display === "none"
      ? "flex"
      : "none"; /*hide the img when hamburger menu is clicked*/
}

/*toggle show/close video*/

let playVideo = document.querySelector(".play-button");
let videoPopup = document.querySelector(".clip");
let hideVideo = document.querySelector(".bi-x-lg");

playVideo.onclick = function () {
  videoPopup.classList.toggle("clip");
};

hideVideo.onclick = function () {
  videoPopup.classList.toggle("clip");
};
