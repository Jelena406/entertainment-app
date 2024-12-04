import React from 'react';
import {useNavigate} from 'react-router';
import {NavLink} from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside>
      <div className="logo" onClick={() => navigate('/')}>
        <img src="/assets/logo.svg" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>
              <img src="/assets/icon-nav-home.svg" alt="Home" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={({isActive}) => (isActive ? 'active' : '')}>
              <img src="/assets/icon-nav-movies.svg" alt="Movies" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/tv-series" className={({isActive}) => (isActive ? 'active' : '')}>
              <img src="/assets/icon-nav-tv-series.svg" alt="Tv series" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookmarks" className={({isActive}) => (isActive ? 'active' : '')}>
              <img src="/assets/icon-nav-bookmark.svg" alt="Bookmarks" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="avatar">
        <img src="/assets/image-avatar.png" alt="Bookmarks" />
      </div>
    </aside>
  );
}
