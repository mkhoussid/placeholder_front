/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_ENDPOINT: string;
	readonly VITE_CLIENT_PATH_DESKTOP: string;
	readonly VITE_CLIENT_PATH_MOBILE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
