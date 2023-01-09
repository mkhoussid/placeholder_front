export namespace Core {
	export type Geolocation = {
		country: string | null;
		state: string | null;
	};

	export type Layout = {
		visibility: {
			header: boolean;
			footer: boolean;
		};
	};

	export type HeaderLink = {
		label: string;
		uri: string;
		icon?: string;
	};

	type TextFieldName = {
		NAME: string;
		PLACEHOLDER: string;
	};

	type TextFieldNames = {
		EMAIL: TextFieldName;
		AUTH_CODE: TextFieldName;
	};

	type Translations = {
		CORE: {
			HEADER: {
				LOGIN: string;
				ABOUT: string;
				PROFILE: string;
				LOGOUT: string;
				HOME: string;
			};
		};
		LANDING: {
			LOGO_TEXT: string;
			SUB_TEXT: string;
			CAROUSEL: {
				MAIN_TEXT: string;
				OPTIONS: string[];
			};
		};
		AUTH_FORM: {
			LOGIN: string;
			SUBMIT: string;
			ENTER_CODE: string;
			WELCOME: string;
		};
		FIELDS: TextFieldNames;
	};

	export type Dictionary = Translations | null;
}
