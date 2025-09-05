export const parseInput = (input) => {
	const T = input.getInteger();

	return { T, inputs: input.getRemainingLines() };
};

export const execute = (input, data) => {
	let res = 0;
	return { res };
};
