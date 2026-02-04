import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile, logout } from '../services/auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [status, setStatus] = useState({ loading: true, error: '' });

  useEffect(() => {
    let isMounted = true;

    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        if (isMounted) {
          setProfile(data);
          setStatus({ loading: false, error: '' });
        }
      } catch (err) {
        const message = err?.response?.data?.message;
        if (isMounted) {
          setStatus({ loading: false, error: message || 'Service Unavailable' });
        }
      }
    };

    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Dashboard</h2>
        <p>Your authenticated profile information.</p>
      </div>
      {status.loading && <p className="muted">Loading profile...</p>}
      {status.error && <div className="alert alert-error">{status.error}</div>}
      {profile && (
        <div className="profile">
          <div>
            <span>Name</span>
            <strong>
              {profile.firstName || profile.first_name || 'User'}{' '}
              {profile.lastName || profile.last_name || ''}
            </strong>
          </div>
          <div>
            <span>Email</span>
            <strong>{profile.email}</strong>
          </div>
          <div>
            <span>Last login</span>
            <strong>{profile.lastLogin || profile.last_login || 'N/A'}</strong>
          </div>
        </div>
      )}
      <button className="btn btn-secondary" type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
