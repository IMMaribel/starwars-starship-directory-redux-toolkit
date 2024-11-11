import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShips, incrementPage } from '../stores/shipsSlice';

const useFetchShips = () => {
  const dispatch = useDispatch();
  const { ships, status, error, currentPage, hasMore } = useSelector((state) => state.ships);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchShips(1));
    }
  }, [dispatch, status]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 100;

      if (scrolledToBottom && status !== 'loading' && hasMore) {
        dispatch(incrementPage());
        dispatch(fetchShips(currentPage + 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, currentPage, status, hasMore]);

  return { ships, status, error, hasMore };
};

export default useFetchShips;