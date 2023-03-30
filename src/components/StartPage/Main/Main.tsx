import './Main.scss';
import '../../../styles/antd.scss'
import { useEffect, useState } from 'react';
import { moviesApi } from '../../../api/api';
import { getFilms, getMoreFilms } from '../../../store/action';
import { NavLink } from 'react-router-dom'
import Rating from '../../../common/Rating/Rating';
import NavLinkFilm from '../../../common/NavLinks/NavLinkFilm/NavLinkFilm';
import H from '../../../common/H/H';
import { useAppDispatch, useTypedSelector } from '../../../Hooks/useTypedSelector/useTypedSelector';
import { IFilm } from '../../../types/IFilm';
import { Button } from 'antd';


function Main() {

    const films = useTypedSelector(state => state.main.films)
    const dispatch = useAppDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        moviesApi.getMovies(page).then(response => dispatch(getFilms(response)));
    }, [])

    const getMore = (e: React.MouseEvent) => {
        if (e.currentTarget.tagName === 'BUTTON') {
            moviesApi.getMovies(page + 1).then(response => dispatch(getMoreFilms(response)));
            setPage(page + 1);
        }
    }

    return <div className="main">
        <div className="main__header">
            <H type={1} value={'Новые фильмы'} />
            <NavLink to='/movie'>
                <Button type='primary' size='middle'>Смотреть все</Button>
            </NavLink>
        </div>
        <div className='main__movies'>
            {films !== null && films.map((item: IFilm) => {
                return (
                    <div className='main__movies__movie' key={item.filmId}>
                        <NavLinkFilm item={item} />
                        <Rating rating={item.rating} type='classic' />
                    </div>
                );
            })}
        </div>
        <Button type='primary' size={'large'} onClick={(e) => getMore(e)}>Показать еще</Button>
    </div>
}

export default Main;