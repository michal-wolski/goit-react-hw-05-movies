import React from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies, getMovieById } from 'api/requests';
import styles from './Homepage.module.css';

const { section, trendingList, trendingListItem } = styles;

const Homepage = props => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  // const match = useMatch();
  // const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(({ data }) => setTrendingMovies(data.results))
      .catch(error => console.log(error));
  }, []);
  return (
    <section className={section}>
      <>
        {/* <h1>Trending today</h1> */}

        <ul className={trendingList}>
          {trendingMovies.map(({ id, poster_path, title }) => (
            <li key={id} className={trendingListItem}>
              <Link
                to={{
                  pathname: `/movies-detail-page/${id}`,
                  // state: { from: { location } },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </>
    </section>
  );
};

export default Homepage;
