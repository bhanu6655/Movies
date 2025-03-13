const express = require('express')
const path = require('path')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const app = express()
app.use(express.json())
const dbpath = path.join(__dirname, 'moviesData.db')

let db = null
const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbpath,
      driver: sqlite3.Database,
    })
    app.listen(3000, () => {
      console.log('Server running on Host http://localhost:3000/')
    })
  } catch (e) {
    console.log(`DB error ${e.message}`)
    process.exit(1)
  }
}
initializeDbAndServer()

const convertDbobjToResobj = dbobj => {
  return {
    directorId: dbobj.director_id,
    directorName: dbobj.director_name,
  }
}

app.get('/movies/', async (request, response) => {
  const getMovieQurey = `SELECT movie_name FROM movie;`
  const moviearray = await db.all(getMovieQurey)
  response.send(
    moviearray.map(eachMovie => ({movieName: eachMovie.movie_name})),
  )
})

app.post('/movies/', async (request, response) => {
  const details = request.body
  const {directorId, movieName, leadActor} = details
  const newMovie = `INSERT INTO movie(director_id,movie_name,lead_actor) VALUES
  (
    ${directorId},
    '${movieName}',
    '${leadActor}'
  ) ;`
  const dbresponse = await db.run(newMovie)
  response.send('Movie Successfully Added')
})

app.get(`/movies/:movieId/`, async (request, response) => {
  const {movieId} = request.params
  const getmovieQuery = `
  select 
    *
  from
      Movie
  where
   movie_id = ${movieId};`
  const movie = await db.get(getmovieQuery)
  const {movie_id, director_id, movie_name, lead_actor} = movie
  const dbresponse = {
    movieId: movie_id,
    directorId: director_id,
    movieName: movie_name,
    leadActor: lead_actor,
  }

  response.send(dbresponse)
})

app.put(`/movies/:movieId/`, async (request, response) => {
  const {movieId} = request.params
  const getbody = request.body
  const {directorId, movieName, leadActor} = getbody
  const updatequery = `UPDATE 
  movie SET
  director_id = ${directorId},
  movie_name  = '${movieName}',
  lead_actor = '${leadActor}'
  where 
  movie_id = ${movieId};`
  const dbresponse = await db.run(updatequery)
  response.send('Movie Details Updated')
})

app.delete(`/movies/:movieId/`, async (request, response) => {
  const {movieId} = request.params
  const deletePlayerQuery = `
    delete
      from movie
    where
      movie_id = ${movieId};`
  await db.run(deletePlayerQuery)
  response.send('Movie Removed')
})

app.get('/directors/', async (request, response) => {
  const getMovieQurey = `SELECT * FROM director;`
  const moviearray = await db.all(getMovieQurey)
  response.send(moviearray.map(eachmovie => convertDbobjToResobj(eachmovie)))
})

app.get(`/directors/:directorId/movies/`, async (request, response) => {
  const {directorId} = request.params
  const getDirectorMovie = `SELECT 
  movie_name
  FROM 
  movie WHERE
  director_id = ${directorId};`
  const movieArray = await db.all(getDirectorMovie)
  response.send(
    movieArray.map(eachMovie => ({movieName: eachMovie.movie_name})),
  )
})

module.exports = app
