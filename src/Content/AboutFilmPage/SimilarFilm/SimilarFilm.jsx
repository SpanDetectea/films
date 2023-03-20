import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { moviesApi } from '../../../api/api';
import H from '../../../common/H/H';
import NavLinkFilm from '../../../common/NavLinks/NavLinkFilm/NavLinkFilm';
import { getSimilatFilms } from '../../../store/action'
import './SimilarFilm.scss';

function SimilarFilm() {

    const { filmId } = useParams();

    const dispatch = useDispatch();
    const aboutFilm = useSelector(state => state.aboutFilm);

    const [startIndexFilm, setStartIndexFilm] = useState(0);

    useEffect(() => {
        moviesApi.getSimilarFilms(filmId).then(response => dispatch(getSimilatFilms(response)))
    }, [])

    const prevFilms = () => {
        setStartIndexFilm(startIndexFilm - 4)
    }
    const nextFilms = () => {
        setStartIndexFilm(startIndexFilm + 4)
    }
    return <div className="similarFilm">
        <H type = {1} value = {` Похожие фильмы (${aboutFilm.similarsTotal})`} />
        <div className="similarFilm__nav">
            <button onClick={prevFilms} disabled={startIndexFilm === 0} className="similarFilm__nav__style">{'<'}</button>
            <button onClick={nextFilms} className="similarFilm__nav__style" disabled={(startIndexFilm === aboutFilm.similarsTotal - 3) || (startIndexFilm === aboutFilm.similarsTotal - 2) || (startIndexFilm === aboutFilm.similarsTotal - 1) || (startIndexFilm === aboutFilm.similarsTotal - 4)}>{'>'}</button>
        </div>
        <div className="similarFilm__wrapper">
            <div className="similarFilm__wrapper__container">
                {aboutFilm.similars.map((item, index) => {
                    if ((index < startIndexFilm + 4) && (index >= startIndexFilm))
                        return <div key={index}>
                            <NavLinkFilm item={item} />
                        </div>
                })}
            </div>
        </div>
    </div>
}

export default SimilarFilm;