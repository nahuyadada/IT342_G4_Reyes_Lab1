import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { isAuthenticated } from './services/auth';

function App() {
  const authenticated = isAuthenticated();

  return (
    <div className="app">
      <Router>
        <header className="topbar">
          <div className="brand">
            <span className="brand-mark" />
            <div>
              <h1>Auth Mini App</h1>
              <p>Secure login and protected dashboard</p>
            </div>
          </div>
          <nav className="nav">
            {!authenticated && (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register" className="btn-link">
                  Register
                </Link>
              </>
            )}
            {authenticated && <Link to="/dashboard">Dashboard</Link>}
          </nav>
        </header>
        <main className="container">
          <Routes>
            <Route path="/" element={<Navigate to={authenticated ? '/dashboard' : '/login'} replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
