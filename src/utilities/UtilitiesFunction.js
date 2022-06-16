const months = {
	"01": "Janv",
	"02": "Fev",
	"03": "Mars",
	"04": "Avril",
	"05": "Mai",
	"06": "Juin",
	"07": "Juil",
	"08": "Août",
	"09": "Sept",
	10: "Oct",
	11: "Nov",
	12: "Dec",
};

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

// 0: Same DMY, 1: Same MY, 2: Same year, 3: other
export function sameDayOrMonthOrYear(date) {
	let date_array = date.split("-");
	let date_now = getDateNow().split("-");
	if (
		date_array[2] === date_now[2] &&
		date_array[1] === date_now[1] &&
		date_array[0] === date_now[0]
	) {
		return 0;
	} else if (date_array[1] === date_now[1] && date_array[0] === date_now[0]) {
		return 1;
	} else if (date_array[0] === date_now[0]) {
		return 2;
	} else {
		return 3;
	}
}

export function dateToString(date) {
	const sameOr = sameDayOrMonthOrYear(date);
	if (sameOr === 0) {
		return "Aujourd'hui";
	} else {
		let date_array = date.split("-");

		if (sameOr === 3) {
			return date_array[2] + " " + months[date_array[1]] + " " + date_array[0];
		} else {
			return date_array[2] + " " + months[date_array[1]];
		}
	}
}

// Sort function by date
export function compareNoteByDate(itemOne, itemTwo){
	const date_one = new Date(itemOne.date)
	const date_two = new Date(itemTwo.date);
	return date_one - date_two
}
