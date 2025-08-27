import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className='not-found'>
      <FaExclamationTriangle className='not-found-icon' />
      <h1 className='not-found-title'>404 Not Found</h1>
      <p className='not-found-text'>This page does not exist</p>
      <Link
        to='/'
        className='not-found-link'
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;
