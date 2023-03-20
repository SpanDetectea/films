import './Rating.scss'

interface IRating {
    rating: string,
    type: string
}

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