import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShips, incrementPage } from '../stores/shipsSlice';

const useFetchShips = () => {
  const dispatch = useDispatch();
  const { ships, status, error, currentPage } = useSelector((state) => state.ships);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchShips(1));
    }
  }, [dispatch, status]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
        dispatch(incrementPage());
        dispatch(fetchShips(currentPage + 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, currentPage]);

  return { ships, status, error };
};

export default useFetchShips;
