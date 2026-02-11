import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { isAuthenticated } from './services/auth';
import { useNavigate } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const authenticated = isAuthenticated();

  return (
    <div className="app">
      {authenticated ? (
        <div className="layout">
          <aside className="sidebar">
            <div className="brand">
              <span className="brand-mark" />
              <h1>Auth Mini App</h1>
            </div>
            <nav className="sidebar-nav">
              <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'nav-item active' : 'nav-item'}>
                Dashboard
              </Link>
              <Link to="/profile" className={location.pathname === '/profile' ? 'nav-item active' : 'nav-item'}>
                Profile
              </Link>
            </nav>
          </aside>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      ) : (
        <>
          <header className="topbar">
            <div className="brand">
              <span className="brand-mark" />
              <div>
                <h1>Auth Mini App</h1>
                <p>Secure login and protected dashboard</p>
              </div>
            </div>
            <nav className="nav">
              <Link to="/login">Login</Link>
              <Link to="/register" className="btn-link">Register</Link>
            </nav>
          </header>
          <main className="container">
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </main>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
