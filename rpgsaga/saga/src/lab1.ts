export const x = 1.28;
export const b = 2.5;
export const nums = [1.1, 2.4, 3.6, 1.7, 3.9];

export function calculate(x: number, b: number): number {
  const resA = Math.pow(
    1 + Math.pow(Math.sin(b), 3) + Math.pow(x, 3),
    2 / Math.pow(Math.pow(b, 3) + Math.pow(x, 3), 1 / 3)
  );
  return resA;
}

export function solvetaskA(xn: number, xk: number, xs: number, b: number): number[] {
  const solutSize = Math.floor((xk - xn) / xs) + 1;
  const arrSlice: number[] = [];

  for (let x = xn; x <= xk; x += xs) {
    arrSlice.push(calculate(x, b));
  }
  return arrSlice;
}

export function solvetaskB(nums: number[], b: number): number[] {
  const resB: number[] = [];
  for (const i of nums) {
    resB.unshift(calculate(i, b));
  }
  return resB;
}

console.log("Задача Б: " + solvetaskB(nums, b));

