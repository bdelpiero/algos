import LinkedList from "../../LinkedList";
import { INode } from "../../LinkedList";

export function max(node: INode<number>, currentMax = 0): number {
  if (!node?.value) return currentMax;
  if (node.value > currentMax) currentMax = node.value
  return max(node.next, currentMax)
}

describe("LinkedList", () => {
  it("recursive implementation of exercise 27", () => {
    const emptyList = new LinkedList<number>();

    expect(max(emptyList.firstNode)).toBe(0);

    const list = new LinkedList<number>();
    list.add(1);
    list.add(10);
    list.add(25);
    list.add(3);
    list.add(4);

    expect(max(list.firstNode)).toBe(25);
  });
});
