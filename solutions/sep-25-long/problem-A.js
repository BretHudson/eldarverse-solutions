export const solution = (input) => {
	const lines = input.split('\n').filter(Boolean);
	const T = +lines[0];

	const names = lines.slice(1);

	if (T !== names.length) throw new Error('invalid');

	let output = [];
	for (let i = 1; i <= T; ++i) {
		const name = names[i - 1];
		const unique = new Set(name.toLowerCase().split(''));
		const K = 100 - unique.size * 5;
		output.push(`Case #${i}: ${K}`);
	}
	return output.join('\n');
};
