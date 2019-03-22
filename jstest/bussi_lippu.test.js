const lippu = require ('./bussi_lippu');
test('annetaan ika 20', () => {
    expect(lippu(20)).toBe("1.5€");
});
test('annetaan ika 2', () => {
    expect(lippu(2)).toBe("ilmainen");
});
test('annetaan ika 15', () => {
    expect(lippu(15)).toBe("1€");
});
test('annetaan ika 26', () => {
    expect(lippu(26)).toBe("3€");
});
test('annetaan ika 70', () => {
    expect(lippu(70)).toBe("1.5€");
});