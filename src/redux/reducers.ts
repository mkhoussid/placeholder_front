import { combineReducers, Action } from 'redux';
import { ThunkAction as ReduxThunkAction } from 'redux-thunk';

import coreReducer, { ICoreState } from 'src/core/redux/reducer';
import socketReducer, { ISocketState } from 'src/socket/redux/reducer';
// import { reducer as toastrReducer, ToastrState as IToastrState } from 'react-redux-toastr';

export type ThunkAction = ReduxThunkAction<void, IState, unknown, Action<string>>;

export interface IState {
	app: {
		core: ICoreState;
		socket: ISocketState;
		ui: {
			// toastr: IToastrState;
		};
	};
}

export default combineReducers<IState>({
	app: combineReducers({
		core: coreReducer,
		socket: socketReducer,
		ui: combineReducers({
			// toastr: toastrReducer,
		}),
	}),
});
