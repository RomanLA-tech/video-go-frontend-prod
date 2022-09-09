const secToMin = (seconds: number) => {
	let minutes: number = Math.floor(seconds / 60);
	let extraSeconds: number = seconds % 60;
	let min: string = minutes < 10 ? '0' + minutes : `${minutes}`;
	let sec: string = extraSeconds < 10 ? '0' + extraSeconds : `${extraSeconds}`;
	return `${min}:${sec}`;
};

export default secToMin;
