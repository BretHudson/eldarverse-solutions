export class Parser {
	pointer = 0;
	constructor(input) {
		this.lines = input.split('\n').filter(Boolean);

		this.testCases = +this.lines[0];
	}

	hasLines() {
		return this.pointer < this.lines.length;
	}

	getInteger() {
		return this.getIntegers()[0];
	}

	getIntegers() {
		return this.getLine().split(' ').map(Number);
	}

	getLine() {
		return this.getLines(1)[0];
	}

	getLines(n) {
		const lines = this.lines.slice(this.pointer, this.pointer + n);
		this.pointer += n;
		return lines;
	}

	getRemainingLines() {
		const lines = this.lines.slice(1);
		this.pointer += lines.length;
		return lines;
	}
}
