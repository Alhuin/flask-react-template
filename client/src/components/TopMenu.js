import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import {logout} from '../redux/actions/auth'

const TopMenu = () => {

    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);

    const logOut = () => {
        dispatch(logout());
    };

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
            AutoMatch
            </Link>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/home"} className="nav-link">Home</Link>
                </li>

                {currentUser && (
                    <li className="nav-item">
                        <Link to={"/user"} className="nav-link">User</Link>
                    </li>
                )}
            </div>

            {currentUser ? (
            <div className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">{currentUser.username}</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link" onClick={logOut}>LogOut</Link>
                </li>
            </div>
            ) : (
            <div className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link">Login</Link>
                </li>

                <li className="nav-item">
                    <Link to={"/register"} className="nav-link">Sign Up</Link>
                </li>
            </div>
            )}
        </nav>
    );
};

export default TopMenu;