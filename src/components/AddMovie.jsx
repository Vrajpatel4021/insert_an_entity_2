import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: '',
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Movie submitted:', movie);
    // Ideally, send this data to a backend or update state
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add a New Movie</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Title:</label>
            <input type="text" name="title" value={movie.title} onChange={handleChange} required 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block font-semibold">Director:</label>
            <input type="text" name="director" value={movie.director} onChange={handleChange} required 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block font-semibold">Genre:</label>
            <select name="genre" value={movie.genre} onChange={handleChange} required 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Genre</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Comedy">Comedy</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Release Year:</label>
            <input type="number" name="releaseYear" value={movie.releaseYear} onChange={handleChange} required 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block font-semibold">Synopsis:</label>
            <textarea name="synopsis" value={movie.synopsis} onChange={handleChange} required 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <div>
            <label className="block font-semibold">Poster Image URL:</label>
            <input type="url" name="posterUrl" value={movie.posterUrl} onChange={handleChange} required 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="flex justify-between mt-4">
            <button type="submit" 
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Submit
            </button>
            <button type="button" onClick={() => navigate('/')} 
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
