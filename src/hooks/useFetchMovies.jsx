import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../stores/moviesSlice';

const useFetchMovies = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (status === 'idle' && filmUrls && filmUrls.length > 0) {
      filmUrls.forEach(url => {
        dispatch(fetchMovies(url));
      });
    }
  }, [dispatch, filmUrls, status]);

  return { movies, status, error };
};

export default useFetchMovies;
