import { isAsyncFunction } from './helpers';
import { createEffect, createEvent, Event, Store } from 'effector';
import { Auth } from 'src/features/auth/auth';
import { EffectWatchers } from 'src/global';
// import { setServerError } from 'src/features/core/effector/actions';

type TWatchHelper = {
	name?: string;
	storeElement: Store<any>;
	watcher?: (state: any) => void;
	print?: boolean;
};
export const watchHelper = ({
	storeElement,
	watcher = () => undefined,
	name = 'state',
	print = false,
}: TWatchHelper) => {
	const wrapper = (state: Store<any>) => {
		if (import.meta.env.DEV && print) {
			console.log(name, state);
		}

		watcher(state);
	};

	storeElement.watch(wrapper);
};

type TEventFactory =
	| {
			storeElement?: Store<any>;
			onHandler?: (state: any, payload: any) => void;
			resetOn?: Event<void>;
	  }
	| undefined;
export const eventFactory = <T>({ storeElement, resetOn, onHandler: _onHandler }: TEventFactory = {}): Event<T> => {
	const event = createEvent<T>();

	const onHandler = (state: T, payload: T) => (_onHandler ? _onHandler(state, payload) : payload);

	if (storeElement) {
		storeElement.on(event, onHandler);

		if (resetOn) {
			storeElement.reset(resetOn);
		}
	}

	return event;
};

type TCreateAndExecuteEffect = {
	prehandler: () => void;
	handler: () => void;
	watchers?: EffectWatchers;
};
export const createAndExecuteEffect = async ({
	prehandler,
	handler,
	watchers = {},
}: TCreateAndExecuteEffect): Promise<void> => {
	const effect = createEffect(handler);
	const isAsync = isAsyncFunction({ func: prehandler });

	if (isAsync) {
		await prehandler();
	} else {
		prehandler();
	}

	// Object.keys(watchers).forEach((watcher) => {
	// 	effect[watcher].watch(watchers[watcher])
	// })

	if (watchers.doneWatcher) {
		effect.done.watch(watchers.doneWatcher);
	}

	if (watchers.doneDataWatcher) {
		effect.doneData.watch(watchers.doneDataWatcher);
	}

	if (watchers.failWatcher) {
		effect.fail.watch(watchers.failWatcher);
	}

	if (watchers.finallyWatcher) {
		effect.finally.watch(watchers.finallyWatcher);
	}

	const failWatcher = (err: any) => {
		if (import.meta.env.DEV) {
			console.error('Error caught', err);
		}

		watchers.failDataWatcher?.(err);
	};

	effect.fail.watch(failWatcher);

	return effect();
};
