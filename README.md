🎬 Movies API
This project provides a RESTful API built with Express.js and SQLite for performing CRUD operations on a movies database containing two tables: movie and director.


Database File: moviesData.db

Tables
🎥 Movie Table
Column	Type
movie_id	INTEGER (Primary Key, Auto Increment)
director_id	INTEGER
movie_name	TEXT
lead_actor	TEXT

🎬 Director Table
Column	Type
director_id	INTEGER (Primary Key)
director_name	TEXT

📚 API Endpoints
1. Get All Movie Names
Path: GET /movies/

Description: Returns a list of all movie names.
json
Copy
Edit
[
  {
    "movieName": "Captain America: The First Avenger"
  }
]




2. Add a New Movie
Path: POST /movies/
Description: Adds a new movie.
json
Copy
Edit
{
  "directorId": 6,
  "movieName": "Jurassic Park",
  "leadActor": "Jeff Goldblum"
}
nginx
Copy
Edit
Movie Successfully Added




4. Get Movie by ID
Path: GET /movies/:movieId/
Description: Returns details of a movie based on the movie ID.
json
Copy
Edit
{
  "movieId": 12,
  "directorId": 3,
  "movieName": "The Lord of the Rings",
  "leadActor": "Elijah Wood"
}



4. Update Movie by ID
Path: PUT /movies/:movieId/
Description: Updates details of a movie.
json
Copy
Edit
{
  "directorId": 24,
  "movieName": "Thor",
  "leadActor": "Christopher Hemsworth"
}
css
Copy
Edit
Movie Details Updated



6. Delete Movie by ID
Path: DELETE /movies/:movieId/
Description: Deletes a movie based on the movie ID.
mathematica
Copy
Edit
Movie Removed




6. Get All Directors
Path: GET /directors/
Description: Returns a list of all directors.
json
Copy
Edit
[
  {
    "directorId": 1,
    "directorName": "Joe Johnston"
  }
]



7. Get Movies by Director
Path: GET /directors/:directorId/movies/
Description: Returns all movie names by a specific director.
json
Copy
Edit
[
  {
    "movieName": "Captain Marvel"
  }
]




🧾 Notes
Uses CommonJS module syntax.

Exports the Express app using default export syntax.

Ensure the moviesData.db file is present in the project directory before running the server.

