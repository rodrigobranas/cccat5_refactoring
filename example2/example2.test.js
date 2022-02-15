const example2 = require("./example2");

test("Deve testar um cpf válido", function () {
	const cpf = "935.411.347-80";
	const isValid = example2.validate(cpf);
	expect(isValid).toBeTruthy();
});

const invalidCpfWithSameDigits = [
	"111.111.111-11",
	"222.222.222-22"
];

describe.each(invalidCpfWithSameDigits)("Deve testar um cpf inválido com os dígitos iguais", function (cpf) {
	test(`${cpf}`, function () {
		const isValid = example2.validate(cpf);
		expect(isValid).toBeFalsy();
	});
});


test("Deve testar um cpf inválido com dígitos diferentes", function () {
	const cpf = "123.456.789-99";
	const isValid = example2.validate(cpf);
	expect(isValid).toBeFalsy();
});
