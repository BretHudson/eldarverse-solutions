export const parseInput = (input) => {
	const T = input.getInteger();

	return { T, inputs: input.getLines(T).map(Number) };
};

const mod = 1_000_000_009n;
export const execute = (input) => {
	const n = 2n ** (BigInt(input) % mod) % mod;
	const res = ((n * (n + 1n)) / 2n) ** 2n % mod;

	return { res };
};
