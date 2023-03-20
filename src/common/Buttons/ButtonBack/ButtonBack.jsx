import { useNavigate } from 'react-router-dom';
import './ButtonBack.scss';

function ButtonBack() {
    let navigate = useNavigate();
    return <button onClick={() => navigate('/')} className='buttonBack'>{'<'} Назад</button>
}

export default ButtonBack;