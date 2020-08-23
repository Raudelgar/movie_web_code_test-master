import { useSelector } from 'react-redux';
import { moviesDetilsSelector } from './useSelectorHelper.js';

export default function useMoviesDetailsState() {
	return useSelector(moviesDetilsSelector);
}
