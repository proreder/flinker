const { sum } = require('./index');

test('suma de 1 + 2 debe ser 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('suma de -1 + 1 debe ser 0', () => {
	expect(sum(-1, 1)).toBe(0);
});

test('suma de 0 + 0 debe ser 0', () => {
	expect(sum(0, 0)).toBe(0);
});