import {INode} from "../LinkedList";

export function reverseList(first: INode<string>) {
  if (!first) return first
  let second: INode<string> = first.next
  let reverse: INode<string> = null
  
  //if(!reverse) return first
  for (let node = first; node !== null; node.next) {
    if (!first) break
    first.next = reverse
    reverse = first
    first = second
    second = second?.next ?? null
  } 

  return reverse
}
