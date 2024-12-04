import React, {useEffect, useState} from 'react';
import {handleBookmark, isBookmarked} from '../utilities';

export default function MovieCard({cardDetails: cards = [], trending, placeholder}) {
  const [bookmarks, setbookmarks] = useState([]);

  const isBookmarked = (id) => {
    return bookmarks.includes(id);
  };

  const handleBookmark = (id) => {
    const ls = JSON.parse(localStorage.getItem('bookmarks')) ?? [];
    if (bookmarks.includes(id)) {
      const newArray = [...bookmarks, ...ls].filter((s) => s !== id);
      setbookmarks(newArray);
      localStorage.setItem('bookmarks', JSON.stringify(ls.filter((s) => s !== id)));
    } else {
      setbookmarks(bookmarks.concat(id));
      localStorage.setItem('bookmarks', JSON.stringify(ls.concat(id)));
    }
  };

  useEffect(() => {
    setbookmarks(JSON.parse(localStorage.getItem('bookmarks')) ?? []);
  }, []);
  return (
    <>
      <h2>{placeholder}</h2>
      <div className={`section  ${trending ? 'trending' : ''}`}>
        {cards.map((cardDetails, i) => (
          <div className="card" key={i}>
            <div className="card-content">
              <img
                className="trending-img"
                src={trending ? cardDetails?.thumbnail?.trending?.large : cardDetails?.thumbnail?.regular?.large}
                alt=""
              />
              <div className="details-title">
                <div className="movie-details">
                  <p>{cardDetails.year} &#183;</p>
                  <p>
                    {cardDetails.category === 'Movie' ? (
                      <img src="./assets/icon-category-movie.svg" alt="" />
                    ) : (
                      <img src="./assets/icon-category-tv.svg" alt="" />
                    )}

                    {cardDetails.category}
                  </p>
                  <p>&#183; {cardDetails.rating}</p>
                </div>
                <h3>{cardDetails.title}</h3>
              </div>
            </div>
            <div className="bookmark" onClick={() => handleBookmark(cardDetails.id)}>
              {isBookmarked(cardDetails.id) ? (
                <img src="./assets/icon-bookmark-full.svg" alt="" />
              ) : (
                <img src="./assets/icon-bookmark-empty.svg" alt="" />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
