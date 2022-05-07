import LinkedList from "../../LinkedList";

export function remove(list: LinkedList<string>, key: string) {
  let counter = 1;
  for (const item of list) {   
    if (item === key) {
        list.delete(counter);
        // don't increment the counter because the current item was removed
        continue;
    }
    counter++;
  }
}

describe("LinkedList", () => {
  it("find() takes a linked list and a string key as arguments and returns true if some node in the list has key as its item field, false otherwise.", () => {
    const list = new LinkedList<string>();
    list.add("h");
    list.add("e");
    list.add("l");
    list.add("l");
    list.add("o");

    remove(list, "l");

    let listAfterRemove = '' 
    for (const item of list) {
        listAfterRemove += item;
    }
    expect(listAfterRemove).toBe("heo");
  });
});