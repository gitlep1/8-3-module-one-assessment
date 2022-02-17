/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let arr = []

  for (const movie of movies) {
    arr.push(movie.title)
  }

  return arr
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  let highMetaScore = 0

  for (let i = 0; i < movies.length - 1; i++) {
    if (movies[i].metascore > movies[i+1].metascore) {
      highMetaScore = Number(movies[i].metascore)
    }
  }
  for (const movie of movies) {
    if (movie.metascore > highMetaScore) {
      highMetaScore = Number(movie.metascore)
    }
  }
  if (movies.length > 0) {
    return highMetaScore
  } else {
    return 0
  }
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return 0.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let imdbAverage = 0

  for (const movie of movies) {
    imdbAverage += Number(movie.imdbRating) / movies.length
  }

  if (movies.length > 0) {
    return imdbAverage
  } else {
    return 0
  }
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let gCount = 0
  let pgCount = 0
  let pg13Count = 0

  const movieObj = {
    'G': 0,
    'PG': 0,
    'PG-13': 0
  }

  for (const movie of movies) {
    switch (movie.rated) {
      case 'G':
        gCount += 1
        break;
      case 'PG':
        pgCount += 1
        break;
      case 'PG-13':
        pg13Count += 1
        break;
    }
  }

  if (gCount > 0) {
    movieObj['G'] = gCount
  } else {
    delete movieObj['G']
  }
  if (pgCount > 0) {
    movieObj['PG'] = pgCount
  } else {
    delete movieObj['PG']
  }
  if (pg13Count > 0) {
    movieObj['PG-13'] = pg13Count
  } else {
    delete movieObj['PG-13']
  }

  return movieObj
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  
  let confirm = false

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === id) {
      confirm = true
      return movies[i]
    }
  }
  
  if (movies.length < 1 || confirm === false) {
    return null
  }
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let genreArr = []

  for (const movie of movies) {
    if (movie.genre.toLowerCase().includes(genre.toLowerCase())) {
      genreArr.push(movie)
    }
  }

  return genreArr
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {

  let releasedArr = []

  for (const movie of movies) {
    if (movie.released.slice(7) <= year) {
      releasedArr.push(movie)
    }
  }

  return releasedArr
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  let currentHighest = 0
  let movieName = ''

  for (const movie of movies) {
    if (typeof movie.boxOffice === 'string') {
      let movieMoney = Number(movie.boxOffice.slice(1).split(',').join(''))
      if (movieMoney > currentHighest) {
        currentHighest = movieMoney
        movieName = movie.title
      }
    }
  }
  if (movies.length > 0) {
    return movieName
  } else {
    return null
  }
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
