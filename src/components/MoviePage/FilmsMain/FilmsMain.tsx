import './FilmsMain.scss';
import { setRating, setYear } from '../../../store/action';
import { setFilmsTC } from '../../../store/ThunkCreator';
import Filters from './filters/Filters';
import { RATING__MAX, RATING__MIN, YEAR__MAX, YEAR__MIN } from '../../../consts/filtersConst';
import H from '../../../common/H/H';
import { useEffect, useState } from 'react';
import BlockFilm from './BlockFilm/BlockFilm';
import Preloader from '../../../common/Preloader/Preloader'
import Pagination from './Pagination/Pagination';
import { useAppDispatch, useTypedSelector } from '../../../Hooks/useTypedSelector/useTypedSelector';
import { Button } from 'antd';
import { IFilm } from '../../../types/IFilm';

function FilmsMain() {
    const rating = useTypedSelector(state => state.filmsMain.rating);
    const year = useTypedSelector(state => state.filmsMain.year);
    const films = useTypedSelector(state => state.filmsMain.films);
    const preloader = useTypedSelector(state => state.filmsMain.preloaderState)

    const dispatch = useAppDispatch();
    const [curPage, setCurPage] = useState(1);

    useEffect(() => {
        dispatch(setFilmsTC(rating, year, curPage))
    }, [curPage])

    const getFilmWithFilters = () => dispatch(setFilmsTC(rating, year, curPage));
    const getFilmWithoutFilters = () => dispatch(setFilmsTC());

    return <div className="filmsMain">
        <div className="filmsMain__menu">
            <div className="filmsMain__menu__header">
                <H type={1} value={'Все фильмы'} />
                <p className="filmsMain__menu__header__description">Подборка фильмов</p>
            </div>
            <div className="filmsMain__menu__filter">
                <Filters name='Рейтинг' min={RATING__MIN} max={RATING__MAX} setValues={(e: number[]) => dispatch(setRating(e))} />
                <Filters name='Год' min={YEAR__MIN} max={YEAR__MAX} setValues={(e: number[]) => dispatch(setYear(e))} />
                <div className="filmsMain__menu__filter__btns">
                    <Button type='primary' size='middle' style={{ background: "red", borderColor: "yellow" }} onClick={getFilmWithFilters}>Применить</Button>
                    <Button type='primary' size='middle' style={{ background: "red", borderColor: "yellow" }} onClick={getFilmWithoutFilters}>Сброс</Button>
                </div>
            </div>
        </div>
        <div className="filmsMain__wrapper">
            <Preloader value={preloader} />
            {films.length > 0 && films.map((item: IFilm) => {                
                return <div key={item.kinopoiskId}>
                    <BlockFilm film={item} />
                </div>
            })}
            <Pagination curPage={curPage} setCurPage={setCurPage} />
        </div>
    </div>
}

export default FilmsMain;