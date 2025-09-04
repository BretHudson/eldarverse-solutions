export const parseInput = (input) => {
	const lines = input.split('\n').filter(Boolean);
	const T = +lines[0];

	return { T, inputs: lines.slice(1) };
};

export const execute = (input, data) => {
	let res = 0;
	return { res };
};
