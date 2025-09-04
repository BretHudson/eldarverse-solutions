export const parseInput = (input) => {
	const lines = input.split('\n').filter(Boolean);
	const T = +lines[0];

	const inputs = lines.slice(1, 1 + T);

	return {
		T,
		singleTestcase: true,
		inputs,
		data: {
			sequence: lines.at(-1),
		},
	};
};

export const execute = (input, data) => {
	const { sequence } = data;

	let textBuffer = [];
	let textLen = 0;
	const keywordCount = [];
	for (let i = 0, n = sequence.length; i < n; ++i) {
		const c = sequence[i];
		if (c === '<') {
			textLen = Math.max(0, textLen - 1);
		} else {
			textBuffer[textLen++] = c;
		}
		const text = textBuffer.slice(0, textLen).join('');
		if (textLen >= 3) {
			const k = input.filter((i) => i.startsWith(text)).length;
			keywordCount.push(k);
		}
	}
	return { lines: keywordCount };
};
