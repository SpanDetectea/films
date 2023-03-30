import { useEffect, useState } from 'react';
import { moviesApi } from '../../../api/api';
import './AddInformation.scss';
import {getFacts} from '../../../store/action';
import { useAppDispatch, useTypedSelector } from '../../../Hooks/useTypedSelector/useTypedSelector';

function AddInformation() {
    const [choice, setChoice] = useState(1);

    const dispatch = useAppDispatch();
    const aboutFilm = useTypedSelector(state => state.aboutFilm)

    useEffect(() => {
        if (aboutFilm.film.length > 0) {
            moviesApi.getFacts(aboutFilm.film[0].kinopoiskId).then(response => dispatch(getFacts(response)));
        }
    }, [aboutFilm.film])

    function createMarkup(text: string) {
        return {__html: `${text}`};
      }
      function styleHeaderName (numHeader: number) {
        return numHeader === choice ? 'addInformation__wrapper__header__name red': 'addInformation__wrapper__header__name';
      }
    return <div className='addInformation'>
        <div className='addInformation__wrapper'>
            <div className='addInformation__wrapper__header'>
                <div className={styleHeaderName(1)} onClick={() => setChoice(1)}>Описание</div>
                <div className={styleHeaderName(2)} onClick={() => setChoice(2)}>Факты</div>
                <div className={styleHeaderName(3)} onClick={() => setChoice(3)}>Ошибки</div>
            </div>
            <div className='addInformation__wrapper__content'>
                {aboutFilm.film.length > 0 && choice === 1 && aboutFilm.film[0].description}
                {aboutFilm.facts.length > 0 && choice === 2 && aboutFilm.facts.map((item, index) => {
                    if (item.type === 'FACT') {
                        return <div key = {index} dangerouslySetInnerHTML={createMarkup(item.text)} className = 'addInformation__wrapper__content__item' />;
                    }
                })}
                {aboutFilm.facts.length > 0 && choice === 3 && aboutFilm.facts.map((item, index) => {
                    if (item.type === 'BLOOPER') {
                        return <div key = {index} dangerouslySetInnerHTML={createMarkup(item.text)} className = 'addInformation__wrapper__content__item' />;
                    }
                })}
            </div>
        </div>
    </div>
}
export default AddInformation;