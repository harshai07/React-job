import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this listing?'
    );

    if (!confirm) return;

    deleteJob(jobId);

    toast.success('Job deleted successfully');

    navigate('/jobs');
  };

  return (
    <>
      <section>
        <div className='job-page-back'>
          <Link
            to='/jobs'
            className='job-page-back-link'
          >
            <FaArrowLeft className='job-page-back-icon' /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className='job-page-content'>
        <div className='job-page-container'>
          <div className='job-page-grid'>
            <main>
              <div className='job-page-main'>
                <div className='job-page-type'>{job.type}</div>
                <h1 className='job-page-title'>{job.title}</h1>
                <div className='job-page-location'>
                  <FaMapMarker className='job-page-location-icon' />
                  <p className='job-page-location-text'>{job.location}</p>
                </div>
              </div>

              <div className='job-page-description'>
                <h3 className='job-page-description-title'>
                  Job Description
                </h3>

                <p className='job-page-description-text'>{job.description}</p>

                <h3 className='job-page-salary-title'>
                  Salary
                </h3>

                <p className='job-page-salary-text'>{job.salary} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className='job-page-sidebar'>
                <h3 className='job-page-sidebar-title'>Company Info</h3>

                <h2 className='job-page-company-name'>{job.company.name}</h2>

                <p className='job-page-company-description'>{job.company.description}</p>

                <hr className='job-page-divider' />

                <h3 className='job-page-contact-title'>Contact Email:</h3>

                <p className='job-page-contact-info'>
                  {job.company.contactEmail}
                </p>

                <h3 className='job-page-contact-title'>Contact Phone:</h3>

                <p className='job-page-contact-info'>
                  {' '}
                  {job.company.contactPhone}
                </p>
              </div>

              <div className='job-page-manage'>
                <h3 className='job-page-manage-title'>Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className='job-page-edit-button'
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className='job-page-delete-button'
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
