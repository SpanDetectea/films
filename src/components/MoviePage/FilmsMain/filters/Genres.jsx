import { useState } from "react";
import { connect } from "react-redux";
import './Genres.scss';

function Genres({ genres }) {
    const [isViewRating, setIsViewRating] = useState(true);

    const toggleRating = () => {
        setIsViewRating(!isViewRating)
    }

    return <div className="genres">
        <h2 className="genres__name">
            Жанры
        </h2>
        <button className={isViewRating ? 'genres__hide' : 'genres__hide reverseHide'}>
            <span onClick={toggleRating}>></span>
        </button>

        {isViewRating && <div className="genres__values">
            <div>
                <select className="genres__values__list">
                    {genres.map((item, index) => {
                        return <option className="genres__values__list__item" key = {index}>
                            {item}
                        </option>
                    })}
                </select>
            </div>
        </div>}


    </div>
}

let mapStateToProps = (state) => {
    return {
        genres: state.filmsMain.genres
    }
}

export default connect(mapStateToProps)(Genres);