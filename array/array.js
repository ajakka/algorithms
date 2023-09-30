/**
 * Array class with some algorithmes used
 *
 * @template T
 * @class
 */
export class ArrayList {
  constructor(length) {
    let buffer = new ArrayBuffer(length * 4); // 4 bytes = 32 bits = 1 Uint32Array
    this.array = new Uint32Array(buffer);
  }

  /**
   * Fill the array with semi random values
   */
  randomSortedFill() {
    for (let index = 0; index < this.array.length; index++) {
      this.array[index] = (index + 1) * 7 - 2;
    }
  }

  /**
   * Fill the array with semi unsorted random values
   */
  randomUnsortedFill() {
    for (let index = 0; index < this.array.length; index++) {
      if (index % 2 === 0) this.array[index] = Math.floor(index / 2 + 4);
      if (index % 3 === 0) this.array[index] = Math.floor(index / 3 + 13);
      if (index % 7 === 0) this.array[index] = Math.floor(index / 7 + 21);
      if (index % 13 === 0) this.array[index] = Math.floor(index / 13 + 5);
    }
  }

  /**
   * Sorts an input array of numbers using the bubble sort algorithm.
   *
   * Bubble sort  iterates through  a list  and  checks if an element
   * is   bigger  than its   predecessor.  If   so,  we  swap   them.
   * The first time we do this, the biggest number ends up at the end
   * of  the  array.  Then,  as  we  iterate, the  following  biggest
   * elements end up  before the previous  biggest  number, until  we
   * have a list of sorted elements.
   *
   * The function  returns  the  sorted  array, leaving the  original
   * input array unmodified.
   *
   *
   * @returns {Uint32Array} A new array containing the sorted numbers
   */
  bubbleSort() {
    const clone = new Uint32Array(this.array);

    for (let undex = 1; undex < clone.length; undex++) {
      for (let index = 0; index < clone.length - undex; index++) {
        if (clone[index] > clone[index + 1]) {
          const temp = clone[index];
          clone[index] = clone[index + 1];
          clone[index + 1] = temp;
        }
      }
    }

    return clone;
  }

  /**
   *
   * @param {Uint32Array} array - The Unsorted array that will run through bubble sort,
   *                              keep in mind this is an imutable process and the original
   *                              array will not be overwriten.
   * @returns {Uint32Array} A new sorted array using bubble sort
   */
  linearSearch(needle) {
    for (let index = 0; index < this.array.length; index++) {
      if (this.array[index] === needle) {
        return index;
      }
    }
    return -1;
  }

  binarySearch(needle) {
    // (high, low)
    let low = 0;
    let high = this.array.length - 1;

    do {
      let mid = Math.floor((high + low) / 2);

      if (needle === this.array[mid]) {
        return mid;
      } else if (needle < this.array[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } while (high >= low);
    return -1;
  }

  toString() {
    return this.array.toString();
  }
}
