function switchFunction(a: number) {
	switch(a) {
		case 1: {
			let var1 = "test";
			console.log(var1);
		}
		case 2: {
			let var2 = "test2";
			console.log(var2);
			break;
		}
		case 3: {
			let var3 = "test3";
			console.log(var3);
			break;
		}
		default: {
			console.log("default");
		}
	}
}
switchFunction(1);
