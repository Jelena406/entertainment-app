import React, {useEffect, useState} from 'react';
import {getMovies} from '../api';
import Search from './Search';
import MovieCard from './MovieCard';

export default function TvSeries() {
  const [allSeries, setAllSeries] = useState([]);

  const getData = async (title) => {
    const results = await getMovies({title, category: 'tv series'});
    const tempMovies = {trending: [], recomended: []};
    for (const result of results) {
      if (result.isTrending) tempMovies.trending.push(result);
      else tempMovies.recomended.push(result);
    }
    setAllSeries(tempMovies);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Search placeholder="Search for TV series" setData={getData} />
      <MovieCard placeholder="Trending" cardDetails={allSeries.trending} trending />
      <MovieCard placeholder="Recommended for you" cardDetails={allSeries.recomended} />
    </>
  );
}
