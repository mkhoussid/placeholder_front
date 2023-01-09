import { AxiosError } from 'axios';
import { Auth } from './features/auth/auth';

interface EffectFinallyBase {
	params: Params;
}
interface EffectFinallySuccess extends EffectFinallyBase {
	status: 'done';
	result: Done;
	error?: never;
}
interface EffectFinallyFail extends EffectFinallyBase {
	status: 'fail';
	error: Fail;
	result?: never;
}
export interface EffectWatchers {
	doneWatcher?: ({ result, params }: { result: Done; params: Params }) => any;
	doneDataWatcher?: (payload: any) => any;
	failWatcher?: ({ error, params }: { error: Fail; params: Params }) => any;
	failDataWatcher?: (failData: { error: AxiosError | Fail; params: Params }) => any;
	finallyWatcher?: (result: EffectFinallySuccess | EffectFinallyFail) => void;
}

export interface ActionBase<T> {
	payload: T;
	watchers?: EffectWatchers;
}
