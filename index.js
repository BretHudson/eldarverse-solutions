import fs from 'node:fs';
import path from 'node:path';
// import { solution } from './solutions/sep-2025-long/problem-a.js';

const challenge = 'sep-25-long';
const problemId = 4 - 1;
const test = false;

const getId = (index) => String.fromCharCode(65 + index);
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

const file = getSolutionPath(challenge, problemId);
const program = await import(file);

const getInputPathFunc = test ? getTestInputPath : getInputPath;
const inputPath = getInputPathFunc(challenge, problemId);
const input = fs.readFileSync(inputPath, 'utf-8');
const execute = ({ parseInput, execute }) => {
	const { T, inputs, data, singleTestcase } = parseInput(input);
	if (T !== inputs.length) throw new Error('invalid');

	const outputs = [];
	if (singleTestcase) {
		const { lines = [] } = execute(inputs, data);
		outputs.push(`Case #1:`, ...lines);
	} else {
		for (let i = 1; i <= T; ++i) {
			const { res, lines = [] } = execute(inputs[i - 1], data);
			outputs.push(`Case #${i}: ${res}`, ...lines);
		}
	}
	return outputs.join('\n');
};
const output = execute(program);
console.log(output);

const outputPath = getOutputPath(challenge, problemId);
fs.writeFileSync(outputPath, output);
