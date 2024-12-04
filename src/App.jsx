import React from 'react';
import {Outlet, Route, Routes} from 'react-router';
import Home from './components/Home';
import Movies from './components/Movies';
import Sidebar from './components/Sidebar';
import TvSeries from './components/TvSeries';
import Bookmarks from './components/Bookmarks';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Page404 from './components/Page404';



const NavigationLayout = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" Component={NavigationLayout}>
        <Route index Component={Home} />
        <Route path="/movies" Component={Movies} />
        <Route path="/tv-series" Component={TvSeries} />
        <Route path="/bookmarks" Component={Bookmarks} />
      </Route>
      <Route path="/sign-in" Component={LogIn} />
      <Route path="/sign-up" Component={SignUp} />
      <Route path="*" Component={Page404} />
    </Routes>
  );
}

export default App;
