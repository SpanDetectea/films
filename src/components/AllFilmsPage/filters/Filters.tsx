import { useEffect, useState } from 'react';
import './Filter.scss';
import { Input, Slider, Typography } from 'antd';
import { useAppDispatch } from '../../../Hooks/useTypedSelector/useTypedSelector';

interface IName {
    name:string,
    maxAndMin: number[],
    setFiltersValue: Function
}

const Filters = ({name, maxAndMin, setFiltersValue}:IName) => {    
    const [ratingValues, setRatingValues] = useState(maxAndMin)
    const [isViewRating, setIsViewRating] = useState(true);

    useEffect(() => {
        dispatch(setFiltersValue(ratingValues))
    }, [ratingValues])
    

    const dispatch = useAppDispatch();


    const ratingFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        let prop = +e.target.value;
        if ((prop > maxAndMin[1]) || (prop < 0) || (Number.isNaN(prop))) {
            return setRatingValues([maxAndMin[0], ratingValues[1]])
        }
        setRatingValues([prop, ratingValues[1]])
    }
    const validateRating1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        let prop = +e.target.value;
        if ((prop > ratingValues[1]) || (prop < maxAndMin[0])) {
            setRatingValues([maxAndMin[0], ratingValues[1]])
        }
    }
    const validateRating2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        let prop = +e.target.value;
        if ((prop < ratingValues[0])) {
            setRatingValues([ratingValues[0], maxAndMin[1]])
        }
    }
    const ratingUpTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        let prop = +e.target.value;
        if ((prop > maxAndMin[1]) || (prop < 0) || (Number.isNaN(prop))) {
            return setRatingValues([ratingValues[0], maxAndMin[1]])
        }
        setRatingValues([ratingValues[0], prop])

    }
    const toggleRating = () => {
        setIsViewRating(!isViewRating)
    }
    const setValueSlider = (e:number[]) => {
        setRatingValues(e)
    }
    return (
        <div className="filter">
            <Typography.Title className="filter__name" level={4}>{name}</Typography.Title>
            <button className={isViewRating ? 'filter__hide' : 'filter__hide reverseHide'}>
                <span onClick={toggleRating}>{'>'}</span>
            </button>
            {isViewRating && <div className="filter__values">
                <label htmlFor="" className="filter__values__from">
                    <span className="filter__values__from__header">
                        От
                    </span>
                    <Input type="text" className="filter__values__from__input" onBlur={(e) => validateRating1(e)} value={ratingValues[0]} onInput={(e: React.ChangeEvent<HTMLInputElement>) => ratingFrom(e)} />
                </label>
                <label htmlFor="" className="filter__values__upTo">
                    <span className="filter__values__upTo__header">
                        До
                    </span>
                    <Input type="text" className="filter__values__upTo__input" onBlur={(e) => validateRating2(e)} value={ratingValues[1]} onInput={(e: React.ChangeEvent<HTMLInputElement>) => ratingUpTo(e)} />
                </label>
                <Slider className='filter__slider' max={maxAndMin[1]} min={maxAndMin[0]} range={true} value={[ratingValues[0],ratingValues[1]]} onChange={e=>setValueSlider(e)}/>
            </div>}


        </div>
    )
}

export default Filters;