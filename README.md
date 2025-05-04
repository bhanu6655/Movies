🎬 Movies API
This project provides a RESTful API built with Express.js and SQLite for performing CRUD operations on a movies database containing two tables: movie and director.

📦 Installation
Clone the repository:

bash

Copy

Edit

git clone <your-repo-url>

cd <your-repo-directory>

Install the dependencies:

bash
Copy
Edit
npm install
🗄️ Database
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
Path: /movies/

Method: GET

Description: Returns a list of all movie names.

Response:
json
Copy
Edit
[
  {
    "movieName": "Captain America: The First Avenger"
  }
]



2. Add a New Movie
Path: /movies/

Method: POST

Description: Adds a new movie.

Request:
json
Copy
Edit
{
  "directorId": 6,
  "movieName": "Jurassic Park",
  "leadActor": "Jeff Goldblum"
}
Response:
nginx
Copy
Edit
Movie Successfully Added





3. Get Movie by ID
Path: /movies/:movieId/

Method: GET

Description: Returns details of the specified movie.

Response:
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
Path: /movies/:movieId/

Method: PUT

Description: Updates movie details by ID.

Request:
json
Copy
Edit
{
  "directorId": 24,
  "movieName": "Thor",
  "leadActor": "Christopher Hemsworth"
}
Response:
css
Copy
Edit
Movie Details Updated





5. Delete Movie by ID
Path: /movies/:movieId/

Method: DELETE

Description: Deletes a movie by ID.

Response:
mathematica
Copy
Edit
Movie Removed






6. Get All Directors
Path: /directors/

Method: GET

Description: Returns a list of all directors.

Response:
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
Path: /directors/:directorId/movies/

Method: GET

Description: Returns all movies by a specific director.

Response:
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

Make sure the database file moviesData.db is present in the project directory.

