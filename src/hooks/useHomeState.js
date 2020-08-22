import { useSelector } from 'react-redux';
import { moviesSelector } from './useSelectorHelper.js';

export default function useHomeState() {
	return useSelector(moviesSelector);
}
