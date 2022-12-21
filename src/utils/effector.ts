import { isAsyncFunction } from './helpers';
import { createEffect, createEvent, Event, Store } from 'effector';
import { Auth } from 'src/features/auth/auth';
import { EffectWatchers } from 'src/global';

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

type TEventFactory = {
	storeElement: Store<any>;
};
export const eventFactory = <T>({ storeElement }: TEventFactory): Event<T> => {
	const event = createEvent<T>();
	storeElement.on(event, (state, payload) => payload);

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
		console.log('entered111');
		await prehandler();
	} else {
		console.log('entered222');
		prehandler();
	}

	if (watchers.doneWatcher) {
		effect.done.watch(watchers.doneWatcher);
	}

	if (watchers.doneDataWatcher) {
		effect.doneData.watch(watchers.doneDataWatcher);
	}

	if (watchers.failWatcher) {
		effect.fail.watch(watchers.failWatcher);
	}

	if (watchers.failDataWatcher) {
		effect.fail.watch(watchers.failDataWatcher);
	}

	if (watchers.finallyWatcher) {
		effect.finally.watch(watchers.finallyWatcher);
	}

	prehandler?.();

	return effect();
};
