/**
 * LinkedLists Module
 * @module linked_lists
 */

/**
 * Represents a node in a unidirectional linked list.
 *
 * @template T The type of the value stored in the node.
 * @typedef {Object} UNode
 * @property {T} value - The value stored in the node.
 * @property {UNode<T>} [next] - The next node in the linked list or null if this is the last node.
 */

/**
 * A Bidirectional Node with next and prev nodes attached
 *
 * @template T                - Used to define the data type
 *
 * @typedef {Object} BNode    - Object defining the bidirectional
 *                              behaviour of the node
 *
 * @property {T} [value]      - The stored value
 * @property {BNode<T>} [next] - The next node
 * @property {BNode<T>} [prev] - The previous node
 */

/**
 * A singly linked list class.
 * @template T The type of elements stored in the linked list.
 */
export class SingleLinkedList {
  /**
   * The head node of the linked list.
   * @type {UNode<T>}
   * @protected
   */
  head = null;

  /**
   * The tail node of the linked list.
   * @type {UNode<T>}
   * @private
   */
  tail = null;

  /**
   * The size of the linked list.
   * @type {number}
   * @private
   */
  size = 0;

  /**
   * Retrieves the value at the specified index from the linked list.
   * @param {number} index - The index of the value to retrieve.
   * @returns {T|null} The value at the specified index or `null` if the index is out of range.
   */
  get(index) {
    let node = this.head;
    if (index < 0) return null;

    for (let itr = 0; ; itr++) {
      if (node) {
        if (itr === index) {
          return node.value;
        } else {
          node = node.next;
        }
      } else return null;
    }
  }

  /**
   * Adds a new value to the begining of the linked list.
   * @param {T} value - The value to be added to the list.
   */
  preppend(value) {
    const node = { value, next: null };
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  /**
   * Adds a new value to the end of the linked list.
   * @param {T} value - The value to be added to the list.
   */
  append(value) {
    const node = { value, next: null };
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  /**
   * Inserts a new value at the specified index in the linked list.
   * @param {T} value - The value to be added.
   * @param {number} index - The index at which the value should be inserted.
   */
  insertAt(value, index) {
    if (index < 0 || index > this.size) return;
    const node = { value, next: null };

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      if (this.tail === null) {
        this.tail = node;
      }
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      if (node.next === null) {
        this.tail = node;
      }
    }
    this.size++;
  }

  /**
   * Removes the first occurrence of the specified value from the linked list.
   * If the value is not found, the list remains unchanged.
   * @param {T} value - The value to be removed.
   */
  remove(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      if (this.head == null) {
        this.tail = this.head;
      }
      this.size--;
      return;
    } else {
      let node = this.head;
      let nextNode = node.next;
      while (node) {
        if (nextNode && nextNode.value === value) {
          // If the value we want to remove is the last one
          if (nextNode.value === this.tail.value) {
            this.tail = node;
          }
          nextNode = nextNode.next;
          this.size--;
          return;
        } else {
          node = nextNode;
        }
      }
    }
  }

  /**
   * Removes the value at the specified index from the linked list.
   * @param {number} index - The index at which the value should be removed.
   */
  removeAt(index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      this.size--;
      return;
    }

    let node = this.head;
    for (let i = 0; i < index - 1; i++) {
      node = node.next;
    }
    node.next = node.next.next;
    if (node.next === null) {
      this.tail = node;
    }
    this.size--;
  }

  /**
   * Checks if the list contains the specified value.
   * @param {T} value - The value to check for.
   * @returns {boolean} True if the list contains the value, false otherwise.
   */
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  /**
   * Returns the size of the linked list.
   * @returns {number} The number of elements in the linked list.
   */
  length() {
    return this.size;
  }

  /**
   * Clears the linked list.
   */
  clear() {
    this.head = this.tail = null;
    this.size = 0;
  }

  /**
   * Returns a string representation of the linked list.
   * @returns {string} A string representation of the linked list.
   */
  toString() {
    let output = "";
    let node = this.head;
    while (node) {
      output += `(${node.value})`;
      node = node.next;
      if (node) output += "--";
    }
    return output;
  }
}

export class DoubleLinkedList {}

export class LoopingLinkedList {}
