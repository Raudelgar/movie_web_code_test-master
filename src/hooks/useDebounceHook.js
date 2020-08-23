import { useCallback } from 'react';
import _ from 'lodash';

export default function useDebounceHook(cb, ms = 300) {
	const debounceCb = useCallback(
		_.debounce((...args) => cb(...args), ms),
		[ms]
	);

	return debounceCb;
}
