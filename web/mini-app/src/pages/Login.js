import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../services/auth';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate('/dashboard');
    } catch (err) {
      const message = err?.response?.data?.message;
      setError(message || 'Invalid credentials or service unavailable.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Welcome back</h2>
        <p>Sign in to access your dashboard.</p>
      </div>
      <form onSubmit={handleSubmit} className="form">
        {location.state?.registered && (
          <div className="alert alert-success">Registration successful. Please log in.</div>
        )}
        <label className="field">
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>
        <label className="field">
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </label>
        {error && <div className="alert alert-error">{error}</div>}
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Signing in...' : 'Login'}
        </button>
      </form>
      <p className="muted">
        No account yet? <Link to="/register">Create one</Link>
      </p>
    </div>
  );
};

export default Login;
