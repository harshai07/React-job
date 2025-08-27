import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'navbar-link active'
      : 'navbar-link';

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-content'>
          <div className='navbar-brand'>
            <NavLink className='navbar-brand' to='/'>
              <img className='navbar-logo' src={logo} alt='React Jobs' />
              <span className='navbar-title'>
                React Jobs
              </span>
            </NavLink>
            <div className='navbar-nav'>
              <div className='navbar-links'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/jobs' className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to='/add-job' className={linkClass}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
