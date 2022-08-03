import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  data: number[];
  constructor(data: number[]) {
    super();
    this.data = data;
  }

  //getting the length
  get length(): number {
    return this.data.length;
  }

  //comparing 2 items in the array
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  //swapping items
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
