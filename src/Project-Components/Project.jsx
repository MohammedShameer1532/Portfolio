import React from 'react';
import '../Project-Components/project.css';
import project from '../assets/project.jpg';
import crudoperation from '../assets/CrudOperation.jpg';
import movierating from '../assets/MovieRating.jpg';
import weather from '../assets/weatherApp.webp';
import tictaktoe from '../assets/tictactoe-game.webp';
import imdbimage from '../assets/imdbimage.jpg';
import loginimage from '../assets/login-image.jpg';
const Project = () => {
  return (
    <div>
      <div>
        <img className='project-svg' src={project} alt='' />
      </div>
      <div className='motivation-container'>
        <p className='motive'>
          Innovative projects don't materialize effortlessly; they require persistent determination and the bold patience to navigate them from conception to realization.
        </p>
      </div>
      <div><h2 className='project-title'>Look At My Projects</h2></div>
      <div>
        <div className='crudimage-container'>
          <img className='crud-image' src={crudoperation} alt='crudimage' />
        </div>
        <div className='crud-hide'>
          <h2 className='crud-title'>Crud App</h2>
          <p>This is full-stack web application for managing user
            data with basic CRUD (Create, Read, Update, Delete) operation
          </p>
          <a href='https://mernstack-crudapp-frontend.onrender.com/' target='_blank' rel="noreferrer" className='btn btn-outline-light' role='button'>Test Link</a><br></br>
          <a href='https://github.com/MohammedShameer1532/MernStack-CrudApp-frontend/tree/master' rel="noreferrer" target='_blank' className='btn btn-outline-light' role='button'>Repo</a>
        </div>
      </div>

      <div>
        <div className='ratingimage-container'>
          <img className='rating-image' src={movierating} alt='ratingimages' />
        </div>
        <div className='rating-hide'>
          <h2 className='rating-title'>Movie Rating App</h2>
          <p>This is React-based web application for managing movie
            data and user interactions, including user reviews and
            authentication using FireBase
          </p>
          <a href='https://movieworld-lemon.vercel.app/' target='_blank' rel="noreferrer" className='btn btn-outline-light' role='button'>Test Link</a><br></br>
          <a href='https://github.com/MohammedShameer1532/Movie-Rating-WebSite' rel="noreferrer" target='_blank' className='btn btn-outline-light' role='button'>Repo</a>
        </div>
      </div>

      <div>
        <div className='weatherimage-container'>
          <img className='weather-image' src={weather} alt='weatherimages' />
        </div>
        <div className='weather-hide'>
          <h2 className='weather-title'>Weather App</h2>
          <p>
            This is React-based weather app that allows users to
            input a city name and get weather information for that
            location
          </p>
          <a href='https://weather-app-three-livid-58.vercel.app/' target='_blank' rel="noreferrer" className='btn btn-outline-light' role='button'>Test Link</a><br></br>
          <a href='https://github.com/MohammedShameer1532/Weather-App' target='_blank' rel="noreferrer" className='btn btn-outline-light' role='button'>Repo</a>
        </div>
      </div>
      <div>
        <div className='tictactoeimage-container'>
          <img className='tictaktoe-image' src={tictaktoe} alt='tictaktoeimages' />
        </div>
        <div className='tictaktoe-hide'>
          <h2 className='tictaktoe-title'>Tic Tak Toe Game</h2>
          <p>
            This is a simple React application for playing the classic game of Tic Tac Toe ,The app provides alerts for two scenarios: when a player wins and when the game is a draw.

          </p>
          <a href="https://tic-tak-toe-game.onrender.com/" target='_blank' rel="noreferrer" className='btn btn-outline-light' role='button'>Test Link</a><br></br>
          <a href="https://github.com/MohammedShameer1532/Tic-Tac-Toe-Game/tree/master" target='_blank' rel="noreferrer" className='btn btn-outline-light' role='button'>Repo</a>
        </div>
      </div>
      <div>
        <div className='imdbimage-container'>
          <img className='imdb-image' src={imdbimage} alt='imbdimages' />
        </div>
        <div className='imdb-hide'>
          <h2 className='imdb-title'>Imdb Search App</h2>
          <p>
            This React app serves as a movie search application using the Open Movie Database (OMDb) API,Users can input a movie name in the search field.
            Clicking the search button triggers an API call to the OMDb API to retrieve movie data.
          </p>
          <a href="https://imdb-website.onrender.com/" target='_blank' rel="noreferrer" className='btn btn-outline-light' role='button'>Test Link</a><br></br>
          <a href="https://github.com/MohammedShameer1532/IMDB-Web-Site/tree/master" target='_blank' rel="noreferrer" className='btn btn-outline-light' role='button'>Repo</a>
        </div>
      </div>
      <div>
        <div className='loginimage-container'>
          <img className='login-image' src={loginimage} alt='loginimage'/>
        </div>
        <div>
        <div className='login-hide'>
          <h2 className='login-title'>Login Form</h2>
          <p>
          This application is a user authentication and profile management system, Authentication is implemented on the server side, and users are redirected to a profile page upon successful login
          </p>
          <a href="https://firstmernproject.netlify.app/" target='_blank' rel="noreferrer" className='btn btn-outline-light' role='button' >Test Link</a><br></br>
          <a href="https://github.com/MohammedShameer1532/FrontendRepo-mern" target='_blank' rel="noreferrer" className='btn btn-outline-light' role='button'>Repo</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
