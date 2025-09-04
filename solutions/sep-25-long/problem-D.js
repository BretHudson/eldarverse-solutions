export const parseInput = (input) => {
	const lines = input.split('\n').filter(Boolean);
	const T = +lines[0];

	return { T, inputs: lines.slice(1).map(Number) };
};

const mod = 1_000_000_009n;
export const execute = (input) => {
	const n = 2n ** (BigInt(input) % mod) % mod;
	const res = ((n * (n + 1n)) / 2n) ** 2n % mod;

	return { res };
};
