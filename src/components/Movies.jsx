import React, {useEffect, useState} from 'react';
import {getMovies} from '../api';
import Search from './Search';
import MovieCard from './MovieCard';
export default function Movies() {
  const [singleMovie, setSingleMovie] = useState({trending: [], recomended: []});

  const getData = async (title) => {
    const results = await getMovies({title, category: 'movie'});
    const tempMovies = {trending: [], recomended: []};
    for (const result of results) {
      if (result.isTrending) tempMovies.trending.push(result);
      else tempMovies.recomended.push(result);
    }
    setSingleMovie(tempMovies);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Search placeholder="Search for movies" setData={getData} />
      <MovieCard placeholder="Trending" cardDetails={singleMovie.trending} trending />
      <MovieCard placeholder="Recommended for you" cardDetails={singleMovie.recomended} />
    </>
  );
}
