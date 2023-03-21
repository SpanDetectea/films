import { AuthRedirect } from '../../HOC/AuthRedirect';
import './Profile.scss';

function Profile() {
    return <div className="profile">
profile
    </div>
}

export default AuthRedirect(Profile);