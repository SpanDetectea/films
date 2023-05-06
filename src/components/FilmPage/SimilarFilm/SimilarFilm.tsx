import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from '../../../api/api';
import NavLinkFilm from '../../../common/NavLinks/NavLinkFilm/NavLinkFilm';
import { useAppDispatch, useTypedSelector } from '../../../Hooks/useTypedSelector/useTypedSelector';
import './SimilarFilm.scss';
import { getSimilarFilms } from '../../../store/aboutFilmReducer';
import { Pagination, Typography } from 'antd';

function SimilarFilm() {
    const { filmId } = useParams();

    const dispatch = useAppDispatch();
    const aboutFilm = useTypedSelector(state => state.aboutFilm);

    const [curIndexFilm, setCurIndexFilm] = useState(1);

    useEffect(() => {
        moviesApi.getSimilarFilms(filmId).then(response => dispatch(getSimilarFilms(response)))
    }, [filmId])

    const changeNumberPage = (e:number) => {
        setCurIndexFilm(e)
    }
    return <div className="similarFilm">
        <Typography.Title className='similarFilm__title'>{` Похожие фильмы (${aboutFilm.similarsTotal})`}</Typography.Title>
        <div className="similarFilm__nav">
            <Pagination defaultPageSize={4} current={curIndexFilm} total={aboutFilm.similars.length} onChange={(e) => changeNumberPage(e)}/>
        </div>
        <div className="similarFilm__wrapper">
            <div className="similarFilm__wrapper__container">
                {aboutFilm.similars.map((item: any, index: number) => {
                    if ((index < (curIndexFilm)*4) && (index >= (curIndexFilm-1)*4))
                        return <div key={index}>
                            <NavLinkFilm item={item} />
                        </div>
                })}
            </div>
        </div>
    </div>
}

export default SimilarFilm;