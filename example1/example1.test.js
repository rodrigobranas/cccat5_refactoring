const example1 = require("./example1");

test("Deve calcular o valor de uma corrida em dias normais", function () {
	const distance = 1000;
	const date = new Date("2021-07-10T10:00:00");
	const price = example1.calculateRide(distance, date);
	expect(price).toBe(2100);
});

test("Deve calcular o valor de uma corrida de noite", function () {
	const distance = 1000;
	const date = new Date("2021-07-10T23:00:00");
	const price = example1.calculateRide(distance, date);
	expect(price).toBe(3900);
});

test("Deve calcular o valor de uma corrida no domingo", function () {
	const distance = 1000;
	const date = new Date("2021-07-11T10:00:00");
	const price = example1.calculateRide(distance, date);
	expect(price).toBe(2900);
});
