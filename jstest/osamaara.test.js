const maara = require ('./osamaara');

test('antaa osamaaran', () => {
    expect(maara(1, 2)).toBe(0.5);
});

test('parametrit puuttuvat, heitetään poikkeus', () => { 
    expect(() => {
      maara(2,0)}).toThrow('Nollalla ei voi jakaa');
  });
  test('annetaan juu', () => {
    expect(() => {
        maara("juu", 1)}).toThrow('ei lukuja');
});