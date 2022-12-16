export namespace Auth {
	export type User = {
		name: string;
	} | null;

	export type FormValues = {
		login: string;
		password: string;
	};

	// export type MyMap<T> = {
	//   [key: string]: T;
	// }

	// export class Settings {
	//   public p1: boolean;
	//   public p2: number;
	// }
}
