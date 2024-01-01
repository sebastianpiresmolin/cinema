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
//--- Movie Card ---//

class MovieCard {
  constructor(movie) {
    this.movie = movie;
  }

  createCard(containerId) {
    // Create a container div for each movie card
    var movieContainer = document.createElement("div");
    movieContainer.className = "movie-card";
    movieContainer.id = this.movie.id.toString();

    // Create image element
    var image = document.createElement("img");
    image.src = this.movie.image;
    image.alt = this.movie.title;

    // Create title element
    var title = document.createElement("h2");
    title.textContent = this.movie.title;

    // Create date element
    var date = document.createElement("p");
    date.textContent = "Release Date: " + this.movie.date;

    // Create genre element
    var genre = document.createElement("p");
    genre.textContent = "Genre: " + this.movie.genre;

    // Create description element
    var description = document.createElement("p");
    description.textContent = this.movie.description;

    // Append elements to the container
    movieContainer.appendChild(image);
    movieContainer.appendChild(title);
    movieContainer.appendChild(date);
    movieContainer.appendChild(genre);
    movieContainer.appendChild(description);

    var containerElement = document.getElementById(containerId);
    if (containerElement) {
      containerElement.appendChild(movieContainer);

      // Correct placement of the if statement
      if ([6, 7, 8, 9, 10, 11, 12].includes(this.movie.id)) {
        movieContainer.classList.add("hidden-movie");
      }
    } else {
      console.error(`Container with ID '${containerId}' not found.`);
    }
  }
}

window.onload = function () {
  // Create movie cards for movieContainer1 using moviesnow
  const containerId1 = 'movieContainer1';
  for (var i = 0; i < moviesnow.length; i++) {
    var movieCard = new MovieCard(moviesnow[i]);
    movieCard.createCard(containerId1);
  }

  // Create movie cards for movieContainer2 using moviesupc
  const containerId2 = 'movieContainer2';
  for (var j = 0; j < moviesupc.length; j++) {
    var movieCard2 = new MovieCard(moviesupc[j]);
    movieCard2.createCard(containerId2);
  }
  
  // Combine moviesnow and moviesupc into a new array
  const allMovies = [...moviesnow, ...moviesupc];

  // Create movie cards for the combined array
  const combinedContainerId = 'combinedMovieContainer';
  for (var k = 0; k < allMovies.length; k++) {
    var combinedMovieCard = new MovieCard(allMovies[k]);
    combinedMovieCard.createCard(combinedContainerId);
  }
};