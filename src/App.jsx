import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useFetchShips from './hooks/useFetchShips';
import ShipCard from './components/ShipCard.jsx';
import ShipPage from './pages/shipPage.jsx';
import  Layout  from './components/Layout.jsx';
import { Loader2Icon } from 'lucide-react';

function App() {

  const { ships, status, error, loadMoreShips } = useFetchShips();

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
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-950 px-4 py-8">
        <div className="max-w-7xl mx-auto">
        <Layout />
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
                {ships.map((ship) => (
                  <ShipCard
                    key={ship.name} ship={ship} />
                  ))}
                </div>
              }
            />
            <Route path="/ships/:id" element={<ShipPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;