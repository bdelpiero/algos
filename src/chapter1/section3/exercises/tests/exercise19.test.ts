import LinkedList from "../../LinkedList";

describe("LinkedList", () => {
  it("should remove last node in a linked list whose first node is 'first'", () => {
    const list = new LinkedList<string>();
    list.add("h");
    list.add("e");
    list.add("l");
    list.add("l");
    list.add("o");

    expect(list.lastNode).toBe("o");

    list.removeLast();
    expect(list.lastNode).toBe("l");
  });
});
