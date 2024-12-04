import React, {useEffect, useState} from 'react';
import {getMovies} from '../api';
import Search from './Search';
import MovieCard from './MovieCard';
import Movies from './Movies';

export default function Home() {
  const [allMovies, setAllMovies] = useState({trending: [], recomended: []});

  const getData = async (title) => {
    const results = await getMovies({title});
    const tempMovies = {trending: [], recomended: []};
    for (const result of results) {
      if (result.isTrending) tempMovies.trending.push(result);
      else tempMovies.recomended.push(result);
    }
    setAllMovies(tempMovies);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Search placeholder="Search for movies or TV series" setData={getData} />
      <MovieCard placeholder="Trending" cardDetails={allMovies.trending} trending />
      <MovieCard placeholder="Recommended for you" cardDetails={allMovies.recomended} />
    </>
  );
}
