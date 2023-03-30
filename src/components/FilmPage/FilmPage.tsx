import './FilmPage.scss';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { moviesApi } from '../../api/api';
import { getFilm } from '../../store/action';
import AddInformation from './AddInformation/AddInformation';
import SimilarFilm from './SimilarFilm/SimilarFilm';
import * as Scroll from 'react-scroll';
import ButtonBack from '../../common/Buttons/ButtonBack/ButtonBack';
import { useAppDispatch, useTypedSelector } from '../../Hooks/useTypedSelector/useTypedSelector';
import { IFilm } from '../../types/IFilm';
import { ICountries } from '../../types/ICountries';
import { IGenres } from '../../types/IGenres';

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
        <div className="aboutFilm">
            <ButtonBack />
            {film.length > 0 && film.map((item: IFilm) => {
                return (<React.Fragment key={item.kinopoiskId}>
                    <img src={item.posterUrlPreview} className='aboutFilm__image' alt='' />
                    <div className="aboutFilm__wrapper">
                        <h1 className='aboutFilm__wrapper__name'>{item.nameRu ?? item.nameEn ?? item.nameOriginal ?? 'Нет названия'}</h1>
                        <p className='aboutFilm__wrapper__nameOriginal'>{item.nameOriginal ?? 'Нет названия'}<span className='aboutFilm__wrapper__nameOriginal__ageLimits'> {item.ratingAgeLimits && item.ratingAgeLimits.slice(3) + '+'}</span></p>
                        <a href={`https://gg.xooxo.cc/film/${item.kinopoiskId}`}><button className='aboutFilm__wrapper__viewing btn-description'>Смотреть</button></a>
                        <button className='aboutFilm__wrapper__favorites btn-description'>Буду смотреть</button>
                        <h2 className='aboutFilm__wrapper__description'>О фильме</h2>
                        <ul className='aboutFilm__wrapper__list'>
                            <li className='aboutFilm__wrapper__list__par'><span>Год производства</span><span>{item.year}</span></li>
                            <li className='aboutFilm__wrapper__list__par'><span>Страна</span><span>{item.countries.map((i: ICountries, index: number) => {
                                return index === item.countries.length - 1 ? `${i.country}` : `${i.country}, `;
                            })}</span></li>
                            <li className='aboutFilm__wrapper__list__par'><span>Жанр</span><span>{item.genres.map((i: IGenres, index: number) => {
                                return index === item.genres.length - 1 ? `${i.genre}` : `${i.genre}, `;
                            })}</span></li>
                            <li className='aboutFilm__wrapper__list__par'><span>Слоган</span><span>{item.slogan ?? 'Нет слогана'}</span></li>
                            <li className='aboutFilm__wrapper__list__par'><span>Возраст</span><span>{item.ratingAgeLimits && item.ratingAgeLimits.slice(3) + '+'}</span></li>
                            <li className='aboutFilm__wrapper__list__par'><span>Время</span><span>{item.filmLength ?? 'Нет продолжительности'}</span></li>
                            <li className='aboutFilm__wrapper__list__par'><span>Рейтинг</span><span>{item.ratingKinopoisk ?? 'Нет рейтинга'}</span></li>
                        </ul>
                    </div>
                </React.Fragment>)
            })}
        </div>
        <AddInformation />
        <SimilarFilm />
    </>
}
export default FilmPage;