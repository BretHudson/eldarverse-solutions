export const parseInput = (input) => {
	const lines = input.split('\n').filter(Boolean);
	const T = +lines[0];

	return { T, inputs: lines.slice(1) };
};

export const execute = (input) => {
	const name = input;
	const unique = new Set(name.toLowerCase().split(''));
	const K = 100 - unique.size * 5;
	return { res: K };
};
