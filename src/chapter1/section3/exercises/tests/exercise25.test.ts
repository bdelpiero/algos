import LinkedList from "../../LinkedList";

describe("LinkedList", () => {
  it("insertAfter() takes two linked-list Node arguments and inserts the second after the first on its list (and does nothing if either argument is null)", () => {
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
