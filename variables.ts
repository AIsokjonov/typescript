function updateX() {
	var x = "12";
	let a = 423;
	const b = 134;
	if(true) {
		var x = "243";
		let a = 12;
		const b = 41;
		console.log(`x inside if: ${x}`);
		console.log(`a inside if: ${a}`);
		console.log(`b inside if: ${b}`);
	}
	console.log(`x outside if: ${x}`);
	console.log(`a outside if: ${a}`);
	console.log(`b outside if: ${b}`);
}
updateX();