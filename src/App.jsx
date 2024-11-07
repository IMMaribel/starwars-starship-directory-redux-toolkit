import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetchShips from './hooks/useFetchShips';
import ShipCard from './components/ShipCard.jsx';
import ShipPage from './pages/shipPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import RegisterPage from './pages/registerPage.jsx';
import Layout from './components/Layout.jsx';
import WelcomePage from './pages/welcomePage.jsx';
import { Loader2Icon } from 'lucide-react';

function App() {

  const { ships, status, error } = useFetchShips();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const renderContent = () => {
    if (status === 'loading' && ships.length === 0) {
      return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
          <Loader2Icon className="w-8 h-8 text-yellow-400 animate-spin" />
        </div>
      );
    }

  if (status === 'loading' && ships.length === 0) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <Loader2Icon className="w-8 h-8 text-yellow-400 animate-spin" />
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500 text-xl mb-4">Error: {error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
                  {ships.map((ship) => (
                    <ShipCard key={ship.id} ship={ship} />
                  ))}
                  {status === 'loading' && ships.length > 0 && (
                    <div className="col-span-full flex justify-center py-4">
                      <Loader2Icon className="w-8 h-8 text-yellow-400 animate-spin" />
                    </div>
                  )}
                </div>
              }
            />
            <Route path="/ships/:id" element={<ShipPage />} />
          </Routes>
        </div>
      </div>
    );
  };

  return renderContent();
}

export default App;