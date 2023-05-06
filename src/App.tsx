import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import StartPage from './components/StartPage/StartPage';
import FilmPage from './components/FilmPage/FilmPage';
import Profile from './components/ProfilePage/Profile';
import AuthPage from './components/AuthPage/AuthPage';
import AllFilmsPage from './components/AllFilmsPage/AllFilmsPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/film/:filmId" element={<FilmPage />} />
        <Route path="/movie" element={<AllFilmsPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
