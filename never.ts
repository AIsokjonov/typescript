function functionThrow(): never {
  throw new Error("This function returns never");
}

function error(message: string): never {
	throw new Error(message);
}

function fail() {
	return error("something failed");
}

function infiniteLoop(): never {
	while (true) {}
}

enum EnumWithChoices {
	ChoiceA,
	ChoiceB,
	ChoiceC,
}

function functionReturnStringFromEnum(c: EnumWithChoices): string {
	switch(c) {
		case EnumWithChoices.ChoiceA:
			return "A";
		case EnumWithChoices.ChoiceB:
			return "B";

		default:
			return unhandledChoiceFromEnum(c);
	}
}

function unhandledChoiceFromEnum(x: never): never {
	throw new Error("Choice not defined");
}
