//--- Movie Card ---//
class MovieCard {
  constructor(movie) {
    this.movie = movie;
  }

  createCard(containerId) {
    var movieContainer = document.createElement("div");
    movieContainer.className = "movie-card";
    movieContainer.id = this.movie.id.toString();

    var image = document.createElement("img");
    image.src = this.movie.image;
    image.alt = this.movie.title;

    var title = document.createElement("h2");
    title.textContent = this.movie.title;

    var date = document.createElement("p");
    date.textContent = "Release Date: " + this.movie.date;

    var genre = document.createElement("p");
    genre.textContent = "Genre: " + this.movie.genre;

    var description = document.createElement("p");
    description.textContent = this.movie.description;

    movieContainer.appendChild(image);
    movieContainer.appendChild(title);
    movieContainer.appendChild(date);
    movieContainer.appendChild(genre);
    movieContainer.appendChild(description);

    var containerElement = document.getElementById(containerId);
    if (containerElement) {
      containerElement.appendChild(movieContainer);

      if (getIdsToHide().includes(this.movie.id)) {
        movieContainer.classList.add("hidden-movie");
      }
    } else {
      console.error(`Container with ID '${containerId}' not found.`);
    }
  }
}

function getContainerIds() {
  const currentPage = window.location.pathname.split("/").pop();
  switch (currentPage) {
    case "index.html":
      return ["movieContainer1", "movieContainer2", "movieContainer3"];
    case "news.html":
      return ["movieContainer3"];
    case "movies.html":
      return ["movieContainer4"];
    default:
      return [];
  }
}

function getIdsToHide() {
  const currentPage = window.location.pathname.split("/").pop();
  switch (currentPage) {
    case "index.html":
      return [6, 7, 8, 9, 10, 11, 12];
    case "news.html":
      return [7, 8, 9, 10, 11, 12];
    case "movies.html":
      return [9, 10, 11, 12];
    default:
      return [];
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is loaded!");
  const containerIds = getContainerIds();
  for (const containerId of containerIds) {
    const containerElement = document.getElementById(containerId);
    if (containerElement) {
      for (var i = 0; i < movies.length; i++) {
        var movieCard = new MovieCard(movies[i]);
        movieCard.createCard(containerId);
      }
    } else {
      console.error(`Container with ID '${containerId}' not found.`);
    }
  }
});

function getContainerIds() {
  const currentPage = window.location.pathname.split("/").pop();
  switch (currentPage) {
    case "index.html":
      return ["movieContainer1", "movieContainer2", "movieContainer3"];
    case "news.html":
      return ["movieContainer3"];
      case "movies.html":
        return ["movieContainer4"];
    default:
      return [];
  }
}
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

