type TAddedTime = {
	hours: number;
	minutes: number;
	seconds: number;
};
interface Date {
	addTime(addedTime: TAddedTime): Date;
}
