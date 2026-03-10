import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, LayoutDashboard } from 'lucide-react';

// Pages
import HomePage from './pages/HomePage';
import RoomDetailsPage from './pages/RoomDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

const Navbar = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <nav style={{
      backgroundColor: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '1rem 0'
    }}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.25rem'
          }}>
            V
          </div>
          <span className="font-bold text-xl tracking-tight">VacaRooms</span>
        </Link>
        <div className="flex gap-4">
          <Link to="/" className={`btn ${!isAdmin ? 'btn-primary' : 'btn-outline'}`}>
            <Home size={18} />
            <span style={{ display: 'none' }} className="sm:inline">Tenant</span>
          </Link>
          <Link to="/admin" className={`btn ${isAdmin ? 'btn-primary' : 'btn-outline'}`}>
            <LayoutDashboard size={18} />
            <span style={{ display: 'none' }} className="sm:inline">Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/room/:id" element={<RoomDetailsPage />} />
            <Route path="/checkout/:id" element={<CheckoutPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
