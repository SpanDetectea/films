import { useState } from 'react';
import RangeComponent from '../../../../common/Range/Range';
import './Filter.scss';
import { setRating } from '../../../../store/action';
import { connect } from 'react-redux'
import H from '../../../../common/H/H';

interface dsa {
    name:string,
    min: number,
    max: number,
    setValues: Function
}

const Filters = ({name, min, max, setValues}:dsa) => {
    
    const [ratingValues, setRatingValues] = useState([min, max])
    const [isViewRating, setIsViewRating] = useState(true);

    const ratingFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        let prop = +e.target.value;
        if ((prop > max) || (prop < 0) || (Number.isNaN(prop))) {
            return setRatingValues([min, ratingValues[1]])
        }
        setRatingValues([prop, ratingValues[1]])
        setValues(ratingValues)
    }
    const validateRating1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        let prop = +e.target.value;
        if ((prop > ratingValues[1]) || (prop < min)) {
            setRatingValues([min, ratingValues[1]])
        }
        setValues(ratingValues)
    }
    const validateRating2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        let prop = +e.target.value;
        if ((prop < ratingValues[0])) {
            setRatingValues([ratingValues[0], max])
        }
        setValues(ratingValues)
    }
    const ratingUpTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        let prop = +e.target.value;
        if ((prop > max) || (prop < 0) || (Number.isNaN(prop))) {
            return setRatingValues([ratingValues[0], max])
        }
        setRatingValues([ratingValues[0], prop])
        setValues(ratingValues)
    }
    const toggleRating = () => {
        setIsViewRating(!isViewRating)
    }
    return (
        <div className="filter">
            <H type = {2} value = {name} />
            <button className={isViewRating ? 'filter__hide' : 'filter__hide reverseHide'}>
                <span onClick={toggleRating}>{'>'}</span>
            </button>
            {isViewRating && <div className="filter__values">
                <label htmlFor="" className="filter__values__from">
                    <span className="filter__values__from__header">
                        От
                    </span>
                    <input type="text" className="filter__values__from__input" onBlur={(e) => validateRating1(e)} value={ratingValues[0]} onInput={(e: React.ChangeEvent<HTMLInputElement>) => ratingFrom(e)} />
                </label>
                <label htmlFor="" className="filter__values__upTo">
                    <span className="filter__values__upTo__header">
                        До
                    </span>
                    <input type="text" className="filter__values__upTo__input" onBlur={(e) => validateRating2(e)} value={ratingValues[1]} onInput={(e: React.ChangeEvent<HTMLInputElement>) => ratingUpTo(e)} />
                </label>
                <RangeComponent ratingValues={ratingValues} setRatingValues={setRatingValues} setValues={setValues} minV = {min} maxV = {max}/>
            </div>}


        </div>
    )
}


export default connect(null, {
    setRating
})(Filters);