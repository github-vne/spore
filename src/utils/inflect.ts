/** @param titles - [1, 3, 5] / [Рыба, Рыбы, Рыб]  */
export default function inflect(val: number, titles: [string, string, string], withVal: boolean = true): string {
  if (val === null || val === undefined) return '';

  const rounded = Math.floor(val);
  const cases = [2, 0, 1, 1, 1, 2];

  return (
    (withVal ? val + ' ' : '') +
    titles[rounded % 100 > 4 && rounded % 100 < 20 ? 2 : cases[rounded % 10 < 5 ? rounded % 10 : 5]]
  );
}
