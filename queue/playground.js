import { Queue } from "./queue.js";

export function play_with_queue() {
  const q = new Queue();

  q.deque();
  q.enque("hi");
  console.log(q.peek());

  q.enque("there");
  console.log(q.peek());

  q.enque("folks");
  console.log(q.peek());

  q.deque();
  console.log(q.peek());

  q.deque();
  console.log(q.peek());

  q.deque();
  console.log(q.peek());
}
