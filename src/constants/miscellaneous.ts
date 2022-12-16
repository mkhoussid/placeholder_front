export const SITE_DEVICE_ID = 'site-device-id';

export type TServerErrorMatrixContent = { title: string; details: string } | null;
export const serverErrorMatrix: Record<number, TServerErrorMatrixContent> = {
	// some error
	1000: {
		title: 'Ошибка сервера',
		details: 'Что-то пошло не так',
	},
} as const;
