import './Main.scss';
import { useEffect, useState } from 'react';
import { moviesApi } from '../../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms, getMoreFilms } from '../../../store/action';
import { NavLink } from 'react-router-dom'
import Rating from '../../../common/Rating/Rating';
import NavLinkFilm from '../../../common/NavLinks/NavLinkFilm/NavLinkFilm';
import H from '../../../common/H/H';
import ButtonFilm from '../../../common/Buttons/ButtonFilm/ButtonFilm';
import { useTypedSelector } from '../../../Hooks/useTypedSelector/useTypedSelector';
import { IFilm } from '../../../store/mainReducer';


function Main() {

    const films = useTypedSelector(state => state.main.films)
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        moviesApi.getMovies(page).then(response => dispatch(getFilms(response)));
    }, [])

    const getMore = (e: any) => {
        if (e.target.tagName === 'BUTTON') {
            moviesApi.getMovies(page + 1).then(response => dispatch(getMoreFilms(response)));
            setPage(page + 1);
        }
    }

    return <div className="main">
        <div className="main__header">
            <H type = {1} value={'Новые фильмы'} />
            <NavLink to='/movie'>
                <ButtonFilm value={'Смотреть все'} color = '#8F8A8A' width = 'auto' display = 'block'/>
            </NavLink>
        </div>
        <div className='main__movies'>
            {films !== null && films.map((item: IFilm) => {
                return (
                    <div className='main__movies__movie' key={item.filmId}>
                        <NavLinkFilm item={item} />
                        <Rating rating={item.rating} type = 'classic'/>
                    </div>
                );
            })}
        </div>
        <div onClick={(e) => getMore(e)}>
            <ButtonFilm color='lightcoral' value={'Показать еще'} width = 'auto' display = 'block'/>
        </div>
    </div>
}

export default Main;