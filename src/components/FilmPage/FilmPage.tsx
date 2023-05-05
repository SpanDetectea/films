import './FilmPage.scss';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { moviesApi } from '../../api/api';
import AddInformation from './AddInformation/AddInformation';
import SimilarFilm from './SimilarFilm/SimilarFilm';
import * as Scroll from 'react-scroll';
import ButtonBack from '../../common/Buttons/ButtonBack/ButtonBack';
import { useAppDispatch, useTypedSelector } from '../../Hooks/useTypedSelector/useTypedSelector';
import { ICountries } from '../../types/ICountries';
import { IGenres } from '../../types/IGenres';
import { getFilm } from '../../store/aboutFilmReducer';
import { Button } from 'antd';

function FilmPage() {
    const { filmId } = useParams();
    const film = useTypedSelector(state => state.aboutFilm.film);
    const dispatch = useAppDispatch();

    let scroll = Scroll.animateScroll;

    useEffect(() => {
        moviesApi.getMovieInfo(filmId).then(response => dispatch(getFilm(response)));
        scrollToTop();
    }, [filmId])

    function scrollToTop() {
        scroll.scrollToTop();
    }
    return <>
        <div className="filmPage">
            <ButtonBack />
            {film.hasOwnProperty('kinopoiskId') && <React.Fragment key={film.kinopoiskId}>
                <img src={film.posterUrlPreview} className='filmPage__image' alt='' />
                <div className="filmPage__wrapper">
                    <h1 className='filmPage__wrapper__name'>{film.nameRu ?? film.nameEn ?? film.nameOriginal ?? 'Нет названия'}</h1>
                    <p className='filmPage__wrapper__nameOriginal'>{film.nameOriginal ?? 'Нет названия'}
                       {film.ratingAgeLimits &&<span className='filmPage__wrapper__nameOriginal__ageLimits'> {film.ratingAgeLimits.slice(3) + '+'}</span>}
                    </p>
                    <Button shape='round' size='large' className='filmPage__wrapper__viewing btn-description'>Смотреть</Button>
                    <Button shape='round' size='large' className='filmPage__wrapper__favorites btn-description'>Буду смотреть</Button>
                    <h2 className='filmPage__wrapper__description'>О фильме</h2>
                    <ul className='filmPage__wrapper__list'>
                        <li className='filmPage__wrapper__list__par'><span>Год производства</span><span>{film.year}</span></li>
                        <li className='filmPage__wrapper__list__par'><span>Страна</span><span>{film.countries.map((i: ICountries, index: number) => {
                            return index === film.countries.length - 1 ? `${i.country}` : `${i.country}, `;
                        })}</span></li>
                        <li className='filmPage__wrapper__list__par'><span>Жанр</span><span>{film.genres.map((i: IGenres, index: number) => {
                            return index === film.genres.length - 1 ? `${i.genre}` : `${i.genre}, `;
                        })}</span></li>
                        <li className='filmPage__wrapper__list__par'><span>Слоган</span><span>{film.slogan ?? 'Нет слогана'}</span></li>
                        <li className='filmPage__wrapper__list__par'><span>Возраст</span><span>{film.ratingAgeLimits && film.ratingAgeLimits.slice(3) + '+'}</span></li>
                        <li className='filmPage__wrapper__list__par'><span>Время</span><span>{film.filmLength ?? 'Нет продолжительности'}</span></li>
                        <li className='filmPage__wrapper__list__par'><span>Рейтинг</span><span>{film.ratingKinopoisk ?? 'Нет рейтинга'}</span></li>
                    </ul>
                </div>
            </React.Fragment>
            }
        </div>
        <AddInformation />
        <SimilarFilm />
    </>
}
export default FilmPage;