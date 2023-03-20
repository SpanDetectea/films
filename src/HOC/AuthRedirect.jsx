import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

export const AuthRedirect = (Component) => {
    const Auth = () => {
        const auth = useSelector(state => state.auth.isAuth);
        if (!auth) {
            return <Navigate to = '/auth' />
        }
        return <Component />
    }
    return Auth;
}