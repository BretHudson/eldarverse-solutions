export const parseInput = (input) => {
	const lines = input.split('\n').filter(Boolean);
	const T = +lines[0];

	return { T, inputs: lines.slice(1).map(Number) };
};

export const execute = (input, data) => {
	let res = BigInt(0);

	if (false) {
		for (let i = 1; i <= input; ++i) {
			res += Math.floor(Math.sqrt(i));
		}
	} else {
		const start = Math.floor(Math.sqrt(input));
		let n = input + 1;
		for (let root = start; root >= 1; --root) {
			const square = root ** 2;
			const total = n - square;
			res += BigInt(total * root);
			n = square;
			// res = nums * start;
		}
	}

	return { res };
};
