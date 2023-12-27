import express, { json } from "express";
import movies from "./movies.json" assert { type: "json" };

// console.log("movies: ", movies);

let LAST_ID = [...movies].pop().id;
console.log("LAST_ID: ", LAST_ID);

const app = express();
const endpoint = "/movies";
// import bodyParser from "body-parser";
// app.use(bodyParser.json()); // for parsing application/json

app.use(express.json());
app.use((req, res, next) => {
  const { originalUrl, method } = req;
  console.log(
    `*************************${originalUrl} : ${method} REQUEST *************************`
  );
  next();
});

// GET all movies
app.get(endpoint, (req, res) => {
  res.send(movies);
});

// GET movie by ID
app.get(endpoint.concat("/:id"), (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => {
    return movie.id == id;
  });
  res.send(movie);
});

// POST a new movie
app.post(endpoint, (req, res) => {
  const body = req.body;
  console.log("body: ", body);
  if (!body) {
    res.end("Error: request body is empty");
  } else {
    body["id"] = newId();
    movies.push(body);
    res.end();
  }
});
function newId() {
  if (movies.length > 0) {
    LAST_ID++;
    return LAST_ID;
  } else {
    return 1;
  }
}
// DELETE a movie
app.delete(endpoint.concat("/:id"), (req, res) => {
  const id = req.params.id;
  const movieIndex = movies.findIndex((movie) => {
    return movie.id == id;
  });
  movies.splice(movieIndex, 1);
  res.end(movieIndex + 1 + " deleted");
});

app.listen(3000, () => {
  console.log("Server up on port 3000");
});
