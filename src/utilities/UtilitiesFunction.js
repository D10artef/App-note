import { MONTHS } from "./UtilitiesCONST";
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
		format2Digit(today.getHours()) ,
		format2Digit(today.getMinutes()),
	].join(":");
}

// 0: Same day, 1: Tomorrow, -1 Yesterday | same month and year
// 2: same month and year but different day
// 3: same year but different month
// 4: different YMD
export function sameDayOrMonthOrYear(date) {
	let date_array = date.split("-");
	let date_now = getDateNow().split("-");
	// same year
	if(date_array[0] === date_now[0]){
		// same month
		if(date_array[1] === date_now[1]) {
			// same day
			if(date_array[2] === date_now[2]){
				return 0
			}
			else{
				const diffDay = parseInt(date_array[2]) - parseInt(date_now[2])
				// tomorrow
				if(diffDay === 1) return 1
				// Hier
				else if (diffDay === -1) return -1
				else return 2
			}
		}
		else{
			return 3
		}
	}else{
		return 4
	}
}

export function dateToString(date) {
	const sameOr = sameDayOrMonthOrYear(date);
	let date_array = date.split("-");
	switch (sameOr) {
		case 0:
			return "Aujourd'hui";
		case 1:
			return "Demain";
		case -1:
			return "Hier";
		case 4:
			return date_array[2] + " " + MONTHS[date_array[1]] + " " + date_array[0];
		default:
			return date_array[2] + " " + MONTHS[date_array[1]];
	}
}

// Sort function by date
export function compareNoteByDate(itemOne, itemTwo){
	const date_one = new Date(itemOne.date)
	const date_two = new Date(itemTwo.date);
	return date_one - date_two
}
