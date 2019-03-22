const ika = require ('./ika');
test('annetaan ika 18', () => {
    expect(ika(18)).toBe(true);
});
test('annetaan ika 3', () => {
    expect(ika(3)).toBe(false);
});
test('annetaan ika 99', () => {
    expect(ika(99)).toBe(true);
});
test('annetaan ika juu', () => {
    expect(() => {
        ika("juu")}).toThrow('ei lukuja');
});