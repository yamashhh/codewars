// return masked string
export function maskify(cc: string): string {
  return cc.slice(-4).padStart(cc.length, "#");
}
