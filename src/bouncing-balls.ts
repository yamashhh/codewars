export function bouncingBall(
  h: number,
  bounce: number,
  window: number,
): number {
  // your code
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let count = 1;

  // The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
  while (h * bounce > window) {
    count += 2;
    h *= bounce;
  }

  return count;
}
