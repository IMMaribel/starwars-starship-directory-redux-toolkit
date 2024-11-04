import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShips } from '../stores/shipsSlice';

const useFetchShips = () => {
  const dispatch = useDispatch();
  const { ships, status, error } = useSelector((state) => state.ships);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchShips(1));
    }
  }, [dispatch, status]);

  return { ships, status, error };
};

export default useFetchShips;
