const inflect = require('../utils/inflect').default;

describe('Test Utils', () => {
  it('inflect', () => {
    const titles: Array<string> = ['рыба', 'рыбы', 'рыб'];

    expect(inflect(1, titles)).toBe('1 рыба');
    expect(inflect(3, titles)).toBe('3 рыбы');
    expect(inflect(15, titles)).toBe('15 рыб');
    expect(inflect(0, titles)).toBe('0 рыб');
    expect(inflect(0.15, titles)).toBe('0.15 рыб');
    expect(inflect(21, titles, false)).toBe('рыба');
  });
});
