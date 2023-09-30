import { Stack } from "./stack.js";

export function play_with_stack() {
  const s = new Stack();

  s.pop();
  s.push("hi");
  s.push("there");
  console.log(s.peek());

  s.pop();
  console.log(s.peek());
}
