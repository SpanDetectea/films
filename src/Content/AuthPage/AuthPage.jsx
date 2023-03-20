import './AuthPage.scss';
import Header from '../../Header/Header'
import ButtonFilm from '../../common/Buttons/ButtonFilm/ButtonFilm';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../store/action';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ButtonBack from './../../common/Buttons/ButtonBack/ButtonBack';

function AuthPage() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);

    const setAuthInfo = () => {
        if ((login ==='user') && (password === 'pas')) {
            dispatch(setAuth(true));
        }
    }

    return <>
        {isAuth && <Navigate to='/profile' />}
        <Header />

        <div style={{margin: '70px'}}><ButtonBack /></div>
        <div className="authPage">
            <div className='authPage__wrapper'>
                <label>Введите логин</label>
                <input type="text" className='authPage__wrapper__info' value={login} onChange={(e) => setLogin(e.target.value)}/>
                <label>Введите пароль</label>
                <input type="password" className='authPage__wrapper__info' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <span onClick={setAuthInfo}>
                    <ButtonFilm value='Отправить' width='50%' />
                </span>
            </div>
        </div>
    </>
}

export default AuthPage;