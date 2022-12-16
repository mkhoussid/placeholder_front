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
		EMAIL_FIELD: TextFieldName;
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
		AUTH: {
			LOGIN: string;
		};
		FIELDS: TextFieldNames;
	};

	export type Dictionary = Translations | null;
}
