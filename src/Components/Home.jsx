import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Home = () => {
  const movieGenres = [
    { id: 1, name: 'Action', image: 'https://www.pinkvilla.com/english/images/2023/07/1941022096_orange-yellow-minimalist-aesthetic-a-day-in-my-life-travel-vlog-youtube-thumbnail_1280*720.jpg' },
    { id: 2, name: 'Comedy', image: 'https://filmfare.wwmindia.com/content/2021/aug/bestcomedymovies121627884806.jpg' },
    { id: 3, name: 'Drama', image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/best-drama-movies-netflix.png?q=50&fit=contain&w=1140&h=&dpr=1.5' }, 
    { id: 4, name: 'Sci-Fi', image: 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/18/1600x800/landscape-1493847257-boardgames-lead.jpg?resize=1200:*' }, 
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Movie Genres</h1>

      <div className="row">
        {movieGenres.map((genre) => (
          <div key={genre.id} className="col-md-3 mb-4">
            <div className="card">
              <img
                src={genre.image} 
                alt={genre.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{genre.name}</h5>
                <p className="card-text">Explore {genre.name} movies.</p>
                <Link to={`/${genre.name.toLowerCase()}`} className="btn btn-primary">
                  View {genre.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
