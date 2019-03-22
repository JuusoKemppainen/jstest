const kolmio = require ('./kolmioiden_pinta-ala');
test('annetaan kolmio korkeus 20 pituus 10 ja kulma 90 astetta', () => {
    expect(kolmio(20,10)).toBe(100);
});
test('annetaan kolmio korkeus "" pituus 10 ja kulma 90 astetta', () => {
    expect(() => {
    kolmio(null,10)}).toThrow('ei lukuja');
});
test('annetaan kolmio korkeus a pituus 10 ja kulma 90 astetta', () => {
expect(() => {
    kolmio("juu",2)}).toThrow('ei lukuja');
});