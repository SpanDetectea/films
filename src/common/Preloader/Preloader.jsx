import './Preloader.scss';
import gif from '../../assets/preloader.gif'

function Preloader({value}) {
    return <>
    {value ? <div className='test'></div> : null }
    <div className="preloader">
        { value ? <img src={gif} alt=""  className='preloader__img'/> : null }
    </div>
    </>
}

export default Preloader;