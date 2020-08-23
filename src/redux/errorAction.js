export const SEARCH_FAIL = 'SEARCH_FAIL';

export function searchFail(bool) {
	return {
		type: SEARCH_FAIL,
		payload: bool,
	};
}
