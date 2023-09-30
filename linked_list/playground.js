import { SingleLinkedList } from "./linked_list.js";

export function play_with_linked_lists() {
  /** @type {SingleLinkedList<string>} */
  let sll = new SingleLinkedList();

  sll.preppend("hello");
  sll.preppend("single");
  // sll.append("linked");
  // sll.append("list");
  console.log(".print()", sll.toString());

  // console.log(".get(4) ", sll.get(4));

  sll.pull("single");
  console.log(".print()", sll.toString());

  // sll.pull("list");
  // console.log(".print()", sll.toString());

  sll.append("new");
  sll.append("stuff");
  sll.append("comming");
  sll.append("soon");
  console.log(".print()", sll.toString());
}
