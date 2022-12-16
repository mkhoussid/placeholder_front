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

	export type Dictionary = {
		textfieldNames: TextFieldNames;
	} | null;
}
