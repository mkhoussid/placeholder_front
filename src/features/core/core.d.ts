export namespace Core {
	export type Geolocation = {
		country: string | null;
		state: string | null;
	};

	export type HeaderLink = {
		label: string;
		uri: string;
	};

	type TextFieldName = {
		NAME: string;
		PLACEHOLDER: string;
	};

	type TextFieldNames = {
		EMAIL: TextFieldName;
		PASSWORD: TextFieldName;
	};

	type Translations = {
		CORE: {
			GO_HOME: string;
			HEADER: {
				LOGIN: string;
				ABOUT: string;
				PROFILE: string;
				LOGOUT: string;
			};
		};
		AUTH_FORM: {
			LOGIN: string;
			SUBMIT: string;
		};
		FIELDS: TextFieldNames;
	};

	export type Dictionary = Translations | null;
}
