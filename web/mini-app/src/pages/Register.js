import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../services/auth';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!form.firstName.trim() || !form.lastName.trim()) {
      setError('Please enter your first and last name.');
      return;
    }

    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      await register({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      });
      navigate('/login', { state: { registered: true } });
    } catch (err) {
      const message = err?.response?.data?.message;
      setError(message || 'Email already taken or service unavailable.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Create your account</h2>
        <p>Register to access your dashboard.</p>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="grid">
          <label className="field">
            First name
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Juan"
              required
            />
          </label>
          <label className="field">
            Last name
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Dela Cruz"
              required
            />
          </label>
        </div>
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
            placeholder="Create a password"
            required
          />
        </label>
        <label className="field">
          Confirm password
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Repeat your password"
            required
          />
        </label>
        {error && <div className="alert alert-error">{error}</div>}
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Register'}
        </button>
      </form>
      <p className="muted">
        Already registered? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default Register;
