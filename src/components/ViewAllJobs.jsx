import { Link } from 'react-router-dom';

const ViewAllJobs = () => {
  return (
    <section className='view-all-jobs'>
      <Link
        to='/jobs'
        className='view-all-jobs-link'
      >
        View All Jobs
      </Link>
    </section>
  );
};
export default ViewAllJobs;
