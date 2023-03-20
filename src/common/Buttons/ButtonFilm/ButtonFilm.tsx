import './ButtonFilm.scss';

interface IButtonFilm {
    value: string,
    color: string,
    width: string,
    display: string
}

function ButtonFilm ({value, color = '#8F8A8A', width = 'auto', display = 'block'}: IButtonFilm) {
    return  <button className='buttonFilm' style={{background: color,
        minWidth: width,
        display: display
    }}>{value}</button>
}

export default ButtonFilm;