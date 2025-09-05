export const parseInput = (input) => {
	const T = input.getInteger();

	return { T, inputs: input.getRemainingLines() };
};

export const execute = (input) => {
	const name = input;
	const unique = new Set(name.toLowerCase().split(''));
	const K = 100 - unique.size * 5;
	return { res: K };
};
