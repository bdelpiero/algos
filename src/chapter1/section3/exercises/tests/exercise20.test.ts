import LinkedList from "../../LinkedList";

describe("LinkedList", () => {
  it("delete() takes an int argument k and deletes the kth element in a linked list, if it exists", () => {
    const list = new LinkedList<string>();
    list.add("h");
    list.add("e");
    list.add("l");
    list.add("l");
    list.add("o");

    expect(list.delete(2)).toBe("e")
    expect(() => list.delete(5)).toThrowError("Out of range")
  });
});
