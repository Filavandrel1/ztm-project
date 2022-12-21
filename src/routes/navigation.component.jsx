import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../assets/crown.svg';
import { UserContext } from '../contexts/user.context';
import { useContext } from 'react';
import { signOutUser } from '../utils/firebase/firebase.utils';


const NavBar = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  console.log(currentUser);

  const handleSignOut = () => {
    signOutUser();
    setCurrentUser(null);
  }

  const isSignedIn = currentUser ? <span onClick={handleSignOut} className="nav-link">Sign-Out</span> : <Link to='/auth' className="nav-link">Sign-In</Link>;

  return(
    <Fragment>
      <div className='navigation'>
        <div className="logo-container">
          <Link to='/'>
            <CrwnLogo className='logo' />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link to='/shop' className="nav-link">Shop</Link>
          {isSignedIn}
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  )
}

export default NavBar;