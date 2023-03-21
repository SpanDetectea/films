import { IRating } from '../../types/IRating';
import './Rating.scss'



function Rating ({rating, type = 'classic'}: IRating) {
    switch (type) {
        case 'blockFilm':
            return <div className='ratingBlockFilm'>
            {rating}
        </div>
        default:
            return <div className='rating'>
        {rating}
    </div>
    }
}

export default Rating;