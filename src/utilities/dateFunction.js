export function format2Digit(val) {
	return String(val).padStart(2, "0");
}

// return Date in format yyyy-mm-dd
export function getDateNow() {
	let today = new Date();
	return [
		today.getFullYear(),
		format2Digit(today.getMonth() + 1),
		format2Digit(today.getDate()),
	].join("-");
}

// return Time in format hh:mm
export function getTimeNow() {
	let today = new Date();
	return [
		format2Digit(today.getHours()),
		format2Digit(today.getMinutes()),
	].join(":");
}
