export const parseInput = (input) => {
	const T = input.getInteger();

	const inputs = input.getLines(T);

	input.getLine(); // skip the =====

	return {
		T,
		singleTestcase: true,
		inputs,
		data: {
			sequence: input.getLine(),
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
