export function beeramid(bonus: number, price: number): number {
  let level = 0;
  let cans = 1;
  let totalPrice = price * cans;

  while (bonus >= totalPrice) {
    level += 1;
    cans += (level + 1) ** 2;
    totalPrice = price * cans;
  }

  return level;
}
