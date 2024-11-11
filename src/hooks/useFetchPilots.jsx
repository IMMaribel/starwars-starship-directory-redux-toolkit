import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPilots, incrementPage } from '../stores/pilotsSlice';

const useFetchPilots = () => {
  const dispatch = useDispatch();
  const { pilots, status, error, currentPage, hasMore } = useSelector((state) => state.pilots);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPilots(1));
    }
  }, [dispatch, status]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100
         && status !== 'loading'
         && hasMore
      ) {
        dispatch(incrementPage());
        dispatch(fetchPilots(currentPage + 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, currentPage, status, hasMore]);

  return { pilots, status, error, hasMore };
};

export default useFetchPilots;
