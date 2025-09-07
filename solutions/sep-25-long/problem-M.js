export const parseInput = (input) => {
	const T = input.getInteger();

	const inputs = [];
	for (let i = 0; i < T; ++i) {
		inputs.push(input.getIntegers());
	}
	return { T, inputs };
};

export const execute = (input) => {
	const [A, B, K] = input;

	const findSmallerTri = (a, b) => {
		const oppA = Math.min(a, b);
		const adjA = Math.max(a, b);

		const theta = Math.atan(oppA / adjA);
		const hypB = adjA;
		const adjB = hypB * Math.cos(theta);
		const oppB = hypB * Math.sin(theta);

		return [adjB, oppB];
	};

	let a = A,
		b = B;
	for (let i = 0; i < K; ++i) {
		[a, b] = findSmallerTri(a, b);
	}
	const area = a * b * 0.5;

	return { res: area.toFixed(6) };
};
