/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_ENDPOINT: string;
	readonly VITE_CLIENT_PATH_DESKTOP: string;
	readonly VITE_CLIENT_PATH_MOBILE: string;
	readonly VITE_MAX_WIDTH: string;
	readonly VITE_LANGUAGE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
