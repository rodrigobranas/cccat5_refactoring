const FACTOR_DIGIT_1 = 10;
const FACTOR_DIGIT_2 = 11;

exports.validate = function (cpf) {
	if (!cpf) return false;
	cpf = cleanCpf(cpf);
    if (!isValidLength(cpf)) return false;
	if (hasAllDigitsEqual(cpf)) return false;
	const digit1 = calculateCheckDigit(cpf, FACTOR_DIGIT_1);
	const digit2 = calculateCheckDigit(cpf, FACTOR_DIGIT_2);
	let checkDigit = extractCheckDigit(cpf);
	const calculatedDigit = `${digit1}${digit2}`;
	return checkDigit == calculatedDigit;
}

const cleanCpf = function (cpf) {
	return cpf.replace(/[\.\-]/g, "");
}

const isValidLength = function (cpf) {
	return cpf.length === 11;
}

const hasAllDigitsEqual = function (cpf) {
	const [firstDigit] = cpf;
	return [...cpf].every(digit => digit === firstDigit);
}

const calculateCheckDigit = function (cpf, factor) {
	let total = 0;
	for (const digit of cpf) {
		if (factor > 1) total += digit * factor--;
	}
	const rest = total%11;
	return (rest < 2) ? 0 : (11 - rest);
}

const extractCheckDigit = function (cpf) {
	return cpf.slice(-2);
}