/**
 * First in first out, think of a line in cinema
 *
 * (4)->(13)->(9)->(1)->(21)->(3)
 *  |                          |
 * (HEAD)                     (TAIL)
 *
 */
export class Queue {
  length = 0;
  head = null;
  tail = null;

  enque(value) {
    const node = { value, next: null };

    this.length++;
    if (this.tail === null) {
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque() {
    if (this.head === null) {
      return null;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.next;
    head.next = null; // house keeping (optional)

    if (this.head === null) {
      // meaning we reach the end,
      // we should also update tail
      this.tail = null;
    }

    return head.value;
  }

  peek() {
    return this.tail && this.tail.value;
  }
}
