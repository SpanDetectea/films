import './App.css';
// import Header from './Header/Header';
import {
  Routes,
  Route
} from "react-router-dom";
import StartPage from './components/StartPage/StartPage';
import FilmPage from './components/FilmPage/FilmPage';
import MoviePage from './components/MoviePage/MoviePage';
import Profile from './components/ProfilePage/Profile';
import AuthPage from './components/AuthPage/AuthPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/film/:filmId" element={<FilmPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
