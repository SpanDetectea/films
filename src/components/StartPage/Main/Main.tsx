import "./Main.scss";
import "../../../common/styles/antd.scss";
import { useEffect, useState } from "react";
import { moviesApi } from "../../../api/api";
import { NavLink } from "react-router-dom";
import Rating from "../../../common/Rating/Rating";
import NavLinkFilm from "../../../common/NavLinks/NavLinkFilm/NavLinkFilm";
import {
  useAppDispatch,
  useTypedSelector,
} from "../../../Hooks/useTypedSelector/useTypedSelector";
import { IFilm } from "../../../types/IFilm";
import { getFilms, getMoreFilms } from "../../../store/mainReducer";
import { Button, Typography } from "antd";

function Main() {
  const films = useTypedSelector((state) => state.main.films);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await moviesApi.getMovies(page);
      dispatch(getFilms(response.films));
    };
    fetchData();
  }, []);

  const getMore = (e: React.MouseEvent) => {
    if (e.currentTarget.tagName === "BUTTON") {
      moviesApi
        .getMovies(page + 1)
        .then((response) => dispatch(getMoreFilms(response.films)));
      setPage(page + 1);
    }
  };

  return (
    <div className="main">
      <div className="main__header">
        <Typography.Title>Новые фильмы</Typography.Title>
        <NavLink to="/movie">
          <Button type="primary" size="middle" className="main-buttons">
            Смотреть все
          </Button>
        </NavLink>
      </div>
      <div className="main__movies">
        {films !== null &&
          films.map((item: IFilm) => {
            return (
              <div className="main__movies__movie" key={item.filmId}>
                <NavLinkFilm item={item} />
                <Rating rating={item.rating} type="classic" />
              </div>
            );
          })}
      </div>
      <Button
        type="primary"
        size={"large"}
        className="main-buttons"
        onClick={(e) => getMore(e)}
      >
        Показать еще
      </Button>
    </div>
  );
}

export default Main;
