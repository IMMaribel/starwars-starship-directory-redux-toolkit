import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShipCard from './components/ShipCard.jsx';
import ShipPage from './pages/shipPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import RegisterPage from './pages/registerPage.jsx';
import Layout from './components/Layout.jsx';
import WelcomePage from './pages/welcomePage.jsx';
import ProtectedRoute from './guards/ProtectRoute.jsx'
import useFetchShips from './hooks/useFetchShips.js';

function App() {

  const { ships, status, error } = useFetchShips();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
      <div className="min-h-screen bg-gray-950 px-4 py-8">
        <div className="max-w-7xl mx-auto">
        <Layout />
        <Routes>
         <Route path="/" element={<Navigate to="/welcome" replace />} />
         <Route path="/welcome" element={<WelcomePage />} />
          <Route
            path="/login"
              element={isAuthenticated ? <Navigate to="/starships" /> : <LoginPage /> }
            />
            <Route 
              path="/register" 
              element={isAuthenticated ? <Navigate to="/starships" /> : <RegisterPage />} 
            />
            <Route
              path="/starships"
              element={
                <ProtectedRoute>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
                  {ships.map((ship) => (
                    <ShipCard key={ship.id} ship={ship} />
                  ))}
                  </div>
                </ProtectedRoute>
              }
            />
            <Route path="/ships/:id" element={<ProtectedRoute><ShipPage/></ProtectedRoute>} />
          </Routes>
        </div>
      </div>
    );
  };

export default App;