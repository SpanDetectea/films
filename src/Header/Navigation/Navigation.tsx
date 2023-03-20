
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
    const [active, setActive] = useState(false)
    return <div className='navigation'>
        <div className="navigation__menu" onClick={()=>setActive(!active)}>
            <span className='navigation__menu__cLine'/>
        </div>
        {active ? <nav className='navigation__wrapper'>
            <ul >
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/movie'>Кино</Link></li>
                <li><Link to='/series'>Сериалы</Link></li>
                <li><Link to='/cartoons'>Мультфильмы</Link></li>
            </ul>
        </nav> : <nav className='navigation__wrapper navigation__active'>
            <ul >
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/movie'>Кино</Link></li>
                <li><Link to='/series'>Сериалы</Link></li>
                <li><Link to='/cartoons'>Мультфильмы</Link></li>
            </ul>
        </nav>}
        
    </div>
}

export default Navigation;