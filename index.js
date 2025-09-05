import fs from 'node:fs';
import path from 'node:path';
import { Parser } from './util/parser.js';

const problemId = 'sep-25-long-G';

const parts = problemId.split('-');
const problemIndex = parts.pop();
const challenge = parts.join('-');
const test = false;

const getId = (index) => {
	return typeof index === 'string' ? index : String.fromCharCode(65 + index);
};
const _getInputOutputPath = (io, challenge, index, type) => {
	const fileName = ['problem', challenge, getId(index), type].join('-');
	return path.join(io, `${fileName}.txt`);
};
const getTestInputPath = (challenge, index) =>
	_getInputOutputPath('inputs', challenge, index, 'test');
const getInputPath = (challenge, index) =>
	_getInputOutputPath('inputs', challenge, index, 'input');
const getOutputPath = (challenge, index) =>
	_getInputOutputPath('outputs', challenge, index, 'output');

const getSolutionPath = (challengeDir, index) => {
	return `./solutions/${challengeDir}/problem-${getId(index)}.js`;
};

const file = getSolutionPath(challenge, problemIndex);
const program = await import(file);

const getInputPathFunc = test ? getTestInputPath : getInputPath;
const inputPath = getInputPathFunc(challenge, problemIndex);
const rawInput = fs.readFileSync(inputPath, 'utf-8');

const execute = ({ parseInput, execute }) => {
	const input = new Parser(rawInput);
	const { T, inputs, data, singleTestcase } = parseInput(input);
	if (T !== inputs.length)
		throw new Error(`Expected ${T} inputs, received ${inputs.length}`);

	const outputs = [];
	if (singleTestcase) {
		const { lines = [] } = execute(inputs, data);
		outputs.push(`Case #1:`, ...lines);
	} else {
		for (let i = 1; i <= T; ++i) {
			const { res = '', lines = [] } = execute(inputs[i - 1], data);
			const caseLine = [`Case #${i}:`, res].filter((v) => v != null).join(' ');
			outputs.push(caseLine, ...lines);
		}
	}
	return outputs.join('\n');
};
const output = execute(program);
console.log(output);

const outputPath = getOutputPath(challenge, problemIndex);
fs.writeFileSync(outputPath, output);
