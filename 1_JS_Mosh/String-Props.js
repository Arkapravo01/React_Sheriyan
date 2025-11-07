const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

const show = (movie) => {
  for (let prop in movie) {
    if (typeof movie[prop] == "string") {
      console.log(`${prop}:${movie[prop]}`);
    }
  }
};

show(movie);
