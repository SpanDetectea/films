import { ChangeEvent, useState } from "react";
import { moviesApi } from "../api/api";
import "./Header.scss";
import Navigation from "./Navigation/Navigation";
import { setSearchFilms } from "../store/action";
import { NavLink } from "react-router-dom";
import {
  useAppDispatch,
  useTypedSelector,
} from "../Hooks/useTypedSelector/useTypedSelector";
import { IFilm } from "../types/IFilm";
import { getSerchFilms } from "../store/headerReducer";
import { Col, Input, Layout, Row, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const films = useTypedSelector((state) => state.header.films);

  const getFilms = (word: string) => {
    moviesApi
      .getFilmsSearch(word, 1)
      .then((response) => dispatch(getSerchFilms(response.films)));
    setSearch(word);
  };

  // не хорошо, надо подумать как избавиться от таймера
  const clearInput = () => {
    let timerId = setTimeout(() => {
    setSearch("");
    dispatch(getSerchFilms([]));
    }, 500);
  };

  return (
    <Row className="header" wrap={true}>
      <Col className="header__name" span={5}>
        <Navigation />
      </Col>
      <Col
        onBlur={clearInput}
        tabIndex={1}
        span={14}
        push={2}
      >
        <div className="header__search__input">
          <Input
            size="small"
            placeholder="Фильмы, сериалы, мультфильмы..."
            prefix={<SearchOutlined />}
            value={search}
            onInput={(e: ChangeEvent<HTMLInputElement>) =>
              getFilms(e.target.value)
            }
          />
        </div>
        <Layout className="header__search__wrapper">
          {films &&
            films.map((item: IFilm) => {
              return (
                <NavLink to={`/film/${item.filmId}`} key={item.filmId}>
                  <Layout className="header__search__wrapper__film">
                    <img
                      className="header__search__wrapper__film__img"
                      src={item.posterUrl}
                      alt=""
                    />
                    <span className="header__search__wrapper__film__name">
                      {item.nameRu}
                    </span>
                  </Layout>
                </NavLink>
              );
            })}
        </Layout>
      </Col>
      <Col className="header__signin" span={3} push={2}>
        <NavLink to={"/profile"}> Войти</NavLink>
      </Col>
    </Row>
  );
}

export default Header;
