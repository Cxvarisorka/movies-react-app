import React, { useEffect, useState } from "react";

function MovieGrid({ movies }){
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{movie.Title}</h2>
              <p className="text-gray-600">Year: {movie.Year}</p>
              <p className="text-gray-600">imdbID: {movie.imdbID}</p>
            </div>
          </div>
        ))}
      </div>
    );
};

function InputBar({getMovies}){
    const [inputValue, setInputValue] = useState('');

    const handleChange = function(e){
        setInputValue(e.target.value);
    }

    const handleSearch = function(){
        getMovies(inputValue);
        setInputValue('');
    }

    return(
        <div className="flex flex-col gap-7 items-center justify-center">
            <input value={inputValue} onChange={handleChange} className="bg-white w-96 h-14 focus:outline-none text-xl text-center rounded-lg" placeholder="Please enter movie name..."></input>
            {inputValue ? <button onClick={handleSearch} className="h-14 px-4 text-lg bg-white rounded hover:bg-blue-600 hover:text-white transition">Search</button> : null}
        </div>
    )
}


function Movies(){
    const [moviesArr, setMoviesArr] = useState([]);

    const apiKey = 'fe36b1f4';

    const getMovies = function(name){
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`)
        .then(res => res.json())
        .then(moviesData => {
            setMoviesArr(moviesData.Search);
            console.log(moviesArr)
        })
    }

    useEffect(function(){
        getMovies('Spiderman');
    }, []);

    return (
        <div className="w-full flex items-center gap-7 flex-col py-10" style={{backgroundColor: '#0E4263'}}>
            <h1 className="text-white font-black text-7xl">Movie Land</h1>

            <InputBar getMovies={getMovies}></InputBar>

            {moviesArr ? <MovieGrid movies={moviesArr}></MovieGrid> : 'Loading'}
        </div>
    )
}

export default Movies;