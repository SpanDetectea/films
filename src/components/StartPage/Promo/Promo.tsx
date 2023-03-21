import './Promo.scss';
import promo from '../../../videos/promo.mp4';
import arrow from '../../../images/promo-arrow-right.png';
import { NavLink } from 'react-router-dom';
import Button from 'antd/es/button';
import { ArrowRightOutlined } from '@ant-design/icons';

function Promo() {


    return <div className="promo">
        <div className="promo__wrapper">
            <h1 className='promo__wrapper__name'>Форсаж</h1>
            <p className='promo__wrapper__description'>Коп под прикрытием внедряется в банду стритрейсеров и становится одним из них. Первая часть гоночной франшизы</p>
            <NavLink to={'/film/' + 666}>
                <Button type='primary' size='large' className='promo__wrapper__more'>Подробнее<ArrowRightOutlined /></Button>
            </NavLink>
        </div>
        <div className='promo__blackBackground'></div>
        <div className="promo__video">
            <video autoPlay muted loop playsInline src={promo} width='100%'>
            </video>
        </div>
    </div>
}

export default Promo;