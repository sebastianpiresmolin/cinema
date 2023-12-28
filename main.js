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


//--- Movie Card ---//

class MovieCard {
  constructor(movie) {
    this.movie = movie;
  }

  createCard() {
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

    var containerElement = document.getElementById("movieContainer");
    containerElement.appendChild(movieContainer);

    if ([5, 6, 7, 8, 9, 10, 11, 12].includes(this.movie.id)) {
      movieContainer.classList.add("hidden-movie");
    }
  }
}


window.onload = function () {
  for (var i = 0; i < movies.length; i++) {
    var movieCard = new MovieCard(movies[i]);
    movieCard.createCard();
  }
};

//--- Movie Scroll ---//

const scrollContainer = document.getElementById('scroll-container');
let currentPosition = 0;

function showMovies() {
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach((card, index) => {
        card.style.display = index >= currentPosition && index < currentPosition + 4 ? 'inline-block' : 'none';
    });
}

function prevMovies() {
    if (currentPosition > 0) {
        currentPosition -= 4;
        showMovies();
    }
}

function nextMovies() {
    const movieCards = document.querySelectorAll('.movie-card');
    if (currentPosition < movieCards.length - 4) {
        currentPosition += 4;
        showMovies();
    }
}


showMovies();