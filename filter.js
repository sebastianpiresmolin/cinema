//--- FilterByType ---//

// Function to filter movies based on checkboxes
function filterMovies() {
  const moviesNowCheckbox = document.getElementById("moviesNowCheckbox");
  const moviesUpcCheckbox = document.getElementById("moviesUpcCheckbox");

  const containerIds = getContainerIds();

  containerIds.forEach((containerId) => {
    const containerElement = document.getElementById(containerId);
    if (containerElement) {
      // Clear the container
      containerElement.innerHTML = "";

      // Filter movies based on checkboxes
      if (moviesNowCheckbox.checked) {
        // Show movies from moviesnow if the checkbox is checked
        moviesnow.forEach((movie) => {
          var movieCard = new MovieCard(movie);
          movieCard.createCard(containerId);
        });
      }

      if (moviesUpcCheckbox.checked) {
        // Show upcoming movies from moviesupc if the checkbox is checked
        moviesupc.forEach((movie) => {
          var movieCard = new MovieCard(movie);
          movieCard.createCard(containerId);
        });
      }

      if (!moviesNowCheckbox.checked && !moviesUpcCheckbox.checked) {
        // Show all movies when both checkboxes are unchecked
        allMovies.forEach((movie) => {
          var movieCard = new MovieCard(movie);
          movieCard.createCard(containerId);
        });
      }
    }
  });
}

// Add event listeners to checkboxes
document.getElementById("moviesNowCheckbox").addEventListener("change", filterMovies);
document.getElementById("moviesUpcCheckbox").addEventListener("change", filterMovies);

window.onload = function () {
  // Initial movie card creation
  filterMovies();
};