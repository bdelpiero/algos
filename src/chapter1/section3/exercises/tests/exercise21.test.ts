import LinkedList from "../../LinkedList";
import {findInList} from "../exercise21";

describe("LinkedList", () => {
  it("find() takes a linked list and a string key as arguments and returns true if some node in the list has key as its item field, false otherwise.", () => {
    const list = new LinkedList<string>();
    list.add("h");
    list.add("e");
    list.add("l");
    list.add("l");
    list.add("o");

    expect(findInList(list, "h")).toBe(true);
    expect(findInList(list, "t")).toBe(false);
    expect(findInList(list, "o")).toBe(true);
    expect(findInList(list, "l")).toBe(true);
    expect(findInList(list, "m")).toBe(false);
  });
});
