export class Vector {
  readonly components: number[];

  constructor(components: number[]) {
    // Start here...
    this.components = components;
  }

  private compareLength(vector: Vector): void {
    if (this.components.length !== vector.components.length) {
      throw new Error("Vector length does not match.");
    }
  }

  add(vector: Vector): Vector {
    this.compareLength(vector);
    return new Vector(
      this.components.map((value, index) => value + vector.components[index]),
    );
  }

  subtract(vector: Vector): Vector {
    this.compareLength(vector);
    return new Vector(
      this.components.map((value, index) => value - vector.components[index]),
    );
  }

  dot(vector: Vector): number {
    this.compareLength(vector);
    return this.components.reduce(
      (previousValue, currentValue, currentIndex) =>
        previousValue + currentValue * vector.components[currentIndex],
      0,
    );
  }

  norm(): number {
    return Math.sqrt(
      this.components.reduce(
        (previousValue, currentValue) => previousValue + currentValue ** 2,
        0,
      ),
    );
  }

  toString(): string {
    return `(${this.components.toString()})`;
  }

  equals(vector: Vector): boolean {
    try {
      this.compareLength(vector);
      return this.components.every(
        (element, index) => element === vector.components[index],
      );
    } catch {
      // NOTE:
      // https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/discuss
      // Equals shouldn't throw an error when lengths are different, only return false.
      return false;
    }
  }
}
