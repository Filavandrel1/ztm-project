import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../assets/crown.svg';

const NavBar = () => {
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
          <Link to='/signin' className="nav-link">Sign-In</Link>
        </div>
      </div>
      {/* <Link to='/'>Home</Link> */}
      {/* <Link to='/shop'>Shop</Link> */}
      <Outlet></Outlet>
    </Fragment>
  )
}

export default NavBar;