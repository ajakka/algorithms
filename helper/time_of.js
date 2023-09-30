export function timeOf(func) {
  let t0 = performance.now();
  func();
  let t1 = performance.now();
  console.log(`Took ${t1 - t0}ms\n`);

  // console.time("Took")
  // func()
  // console.timeEnd("Took")
}
