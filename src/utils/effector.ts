import { createEffect, createEvent, Effect, Event, Store } from 'effector';

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
	handler: () => any;
};
export const createAndExecuteEffect = async <T>({ handler }: TCreateAndExecuteEffect): Promise<T> => {
	const effect = createEffect(handler);

	return effect();
};
