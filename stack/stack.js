/**
 * First in last out, think of pancakes
 *
 * (4)<-(13)<-(9)<-(1)<-(21)<-(3)
 *                             |
 *                            (HEAD)
 */
export class Stack {
  length = 0;
  head = null;

  constructor() {
    this.length = 0;
    this.head = null;
  }

  push(value) {
    this.length++;

    if (this.head === null) {
      this.head = { value, prev: null };
      return;
    }

    const node = { value, prev: this.head };
    this.head = node;
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    this.length--;

    const lastValue = this.head.value;
    this.head = this.head.prev;
    return lastValue;
  }

  peek() {
    return this.head && this.head.value;
  }
}
