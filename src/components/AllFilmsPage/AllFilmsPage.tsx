import "./AllFilmsPage.scss";
import Filters from "./filters/Filters";
import { useEffect, useState } from "react";
import BlockFilm from "./BlockFilm/BlockFilm";
import { Button, Pagination, Typography } from "antd";
import type { PaginationProps } from "antd";
import { setFilmsTC } from "../../store/ThunkCreator";
import {
  useAppDispatch,
  useTypedSelector,
} from "../../Hooks/useTypedSelector/useTypedSelector";
import Preloader from "../../common/Preloader/Preloader";
import { IFilm } from "../../types/IFilm";
// import Pagination from './Pagination/Pagination';
import { setRating, setYear } from "../../store/allFilmsReducer";
import {
  RATING__MAX,
  RATING__MIN,
  YEAR__MAX,
  YEAR__MIN,
} from "../../consts/filtersConst";

function AllFilmsPage() {
  const { rating, year, films, preloaderState } = useTypedSelector(
    (state) => state.allFilms
  );

  const total = useTypedSelector((state) => state.allFilms.total);
  const totalPage = useTypedSelector((state) => state.allFilms.totalPages);
  const pageNumbers = total && totalPage && Math.ceil(total / totalPage);

  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setCurPage(pageNumber);
  };

  const dispatch = useAppDispatch();
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    dispatch(setFilmsTC(rating, year, curPage));
  }, [curPage]);

  const getFilmWithFilters = () => dispatch(setFilmsTC(rating, year, curPage));
  const getFilmWithoutFilters = () => dispatch(setFilmsTC());
  return (
    <div className="allFilmsPage">
      <div className="allFilmsPage__menu">
        <div className="allFilmsPage__menu__header">
          <Typography.Title>Все фильмы</Typography.Title>
          <Typography.Text className="allFilmsPage__menu__header__description">
            Подборка фильмов
          </Typography.Text>
        </div>
        <div className="allFilmsPage__menu__filter">
          <Filters
            name="Рейтинг"
            maxAndMin={[RATING__MIN, RATING__MAX]}
            setFiltersValue={setRating}
          />
          <Filters
            name="Год"
            maxAndMin={[YEAR__MIN, YEAR__MAX]}
            setFiltersValue={setYear}
          />
          <div className="allFilmsPage__menu__filter__btns">
            <Button
              type="primary"
              size="middle"
              style={{ background: "#1f1d1d", color: "white" }}
              onClick={getFilmWithFilters}
            >
              Применить
            </Button>
            <Button
              type="primary"
              size="middle"
              style={{ background: "#1f1d1d", color: "white" }}
              onClick={getFilmWithoutFilters}
            >
              Сброс
            </Button>
          </div>
        </div>
      </div>
      <div className="allFilmsPage__wrapper">
        <Preloader value={preloaderState} />
        {films.length > 0 &&
          films.map((item: IFilm) => {
            return (
              <div key={item.kinopoiskId}>
                <BlockFilm film={item} />
              </div>
            );
          })}
        <Pagination
          current={curPage}
          total={total}
          onChange={onChange}
          pageSize={pageNumbers || 1}
          showSizeChanger={false}
          className="allFilmsPage__wrapper__pagination"
        />
        {/* <Pagination curPage={curPage} setCurPage={setCurPage} /> */}
      </div>
    </div>
  );
}

export default AllFilmsPage;
