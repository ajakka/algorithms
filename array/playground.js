import { timeOf } from "../helper/time_of.js";
import { ArrayList } from "./array.js";

export function play_with_arrays() {
  let array = new ArrayList(12);

  array.randomSortedFill();
  console.log(`[${array.array}] for randomUnSortedFill\n`);

  timeOf(() => {
    console.log(`[${array.bubbleSort()}] is result using bubbleSort`);
  });

  array.randomSortedFill();
  console.log(`[${array}] for randomSortedFill\n`);

  let trg = 61;

  timeOf(() => {
    console.log(
      `[${array.linearSearch(trg)}] is result for ${trg} using linearSearch`
    );
  });

  timeOf(() => {
    console.log(
      `[${array.binarySearch(trg)}] is result for ${trg} using binarySearch`
    );
  });
}
