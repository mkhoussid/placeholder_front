function addTimeToDate(addedTime: TAddedTime, date: Date) {
	let generatedTime = date.getTime();
	if (addedTime.seconds) generatedTime += 1000 * addedTime.seconds; //check for additional seconds
	if (addedTime.minutes) generatedTime += 1000 * 60 * addedTime.minutes; //check for additional minutes
	if (addedTime.hours) generatedTime += 1000 * 60 * 60 * addedTime.hours; //check for additional hours
	return new Date(generatedTime);
}

Date.prototype.addTime = function (addedTime) {
	return addTimeToDate(addedTime, this);
};

export {};
