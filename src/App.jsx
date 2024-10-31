import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShips } from './stores/shipsSlice.js';
import ShipCard from './components/ShipCard.jsx';
import { Loader2Icon } from 'lucide-react';
import logo from './assets/starWarsLogo.png';

function App() {
  const dispatch = useDispatch();
  const { ships, status, error } = useSelector((state) => state.ships);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchShips(1));
    }
  }, [dispatch, status]);

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
    <div className="min-h-screen bg-gray-950 px-4 py-8">
      <div className="max-w-7xl mx-auto">
      <header className="mb-8 items-center"> 
              <div className="flex justify-center">
                <img src={logo} alt="logo" className="-mt-10 w-60" />
              </div>
        <div className="flex font-chackra justify-end -mt-16 pb-3">
                <button className="px-3 text-gray-400 hover:border-b-2 border-gray-400 hover:text-white">
                  LOG IN
                </button>
                <button className="px-3 text-gray-400 hover:border-b-2 border-gray-400 hover:text-white">
                  SIGN UP
                </button>
        </div>
            <div className="flex font-chackra justify-center border-t-2 border-b-2 border-gray-400">
              <button className="px-6 py-2 border-l-2 border-r-2 border-gray-400 text-gray-400 hover:border-b-4 hover:border-b-blue-400 hover:text-white">
                HOME
              </button>
              <button className="px-6 py-2 border-l-2 border-r-2 border-gray-400 text-gray-400 hover:border-b-4 hover:border-b-blue-400 hover:text-white">
                STARSHIPS
              </button>
            </div>
      </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
          {ships.map((ship, index) => (
            <ShipCard
              key={`${ship.name}-${index}`}
              name={ship.name}
              model={ship.model}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;