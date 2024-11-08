import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShips, incrementPage, resetShips } from '../stores/shipsSlice';

const useFetchShips = () => {
  const dispatch = useDispatch();
  const { ships, status, error, currentPage, hasMore } = useSelector((state) => state.ships);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(resetShips())
      dispatch(fetchShips(1));
    }
  }, [dispatch, status]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100
         && status !== 'loading'
         && hasMore
      ) {
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
