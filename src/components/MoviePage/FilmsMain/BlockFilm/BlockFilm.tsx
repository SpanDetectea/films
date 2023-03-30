import H from '../../../../common/H/H';
import Rating from '../../../../common/Rating/Rating';
import './BlockFilm.scss';
import { NavLink } from 'react-router-dom'
import { IFilmObj } from '../../../../types/IFilm';

function BlockFilm({film}:IFilmObj) {    
    return <NavLink to={'/film/' + film.kinopoiskId}>
        <div className="blockFilm">
            <img src={film.posterUrl} alt="" className='blockFilm__poster' />
            <div className="blockFilm__name blockFilm-padding">
                <H type={3} value={film.nameRu ?? film.nameOriginal} />
            </div>
            <div className="blockFilm__year blockFilm-padding">
                {film.year}
            </div>
            <div className="blockFilm__description blockFilm-padding">
                {film.genres.map((item: any, index: number) => {
                    return index === film.genres.length - 1 ? item.genre : `${item.genre}, `;
                })}
            </div>
            <div className="blockFilm__rating">
                <Rating rating={film.ratingKinopoisk} type='blockFilm' />
            </div>
            <div className="blockFilm__beView">
                <button className="blockFilm__beView__btn">
                    буду смотреть
                </button>
            </div>
        </div>
    </NavLink>
}

export default BlockFilm;