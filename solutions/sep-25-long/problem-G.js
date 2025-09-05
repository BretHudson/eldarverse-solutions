export const parseInput = (input) => {
	const T = input.getInteger();

	const inputs = [];
	for (let i = 0; i < T; ++i) {
		inputs.push(input.getInteger());
	}

	return { T, inputs };
};

export const execute = (input, data) => {
	const N = input;

	const perm = [];
	let lowIndex = 1;
	let midIndex = Math.ceil((N + 1) / 2);
	const diff = midIndex - lowIndex;
	for (let i = 0; i < N; ++i) {
		perm.push(i % 2 == 0 ? midIndex++ : lowIndex++);
	}

	const permStr = perm.join(' ');
	return { res: diff, lines: [permStr] };
};
