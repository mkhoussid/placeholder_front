import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type TUseNavigateParams = {
	uri: string | -1;
	params?: Record<string, unknown> | false;
	state?: Record<string, unknown>;
	replace?: boolean;
};
export default function useNavigateParams(): ({ uri, params, state, replace }: TUseNavigateParams) => void {
	const navigate = useNavigate();

	return ({ uri, params = {}, state = undefined, replace = undefined }: TUseNavigateParams): void => {
		if (uri === -1) {
			navigate(-1);
		} else {
			const path = axios.getUri({ url: uri, params: params === false ? {} : params });

			navigate(path, { state, replace });
		}
	};
}
