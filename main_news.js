var newsMovieData = movies.find(movie => movie.id === 8); // Assuming you want a different movie
var newsMovieCard = new MovieCard(newsMovieData);
newsMovieCard.createCard("movieContainer3", [7, 8, 9, 10, 11, 12]);