import LinkedList, {INode} from "../../LinkedList";
import Node from "../../Node";


describe("LinkedList", () => {
  it("insertAfter() takes two linked-list Node arguments and inserts the second after the first on its list (and does nothing if either argument is null)", () => {
    const list = new LinkedList<string>();
    list.add("h");
    list.add("e");
    list.add("l");
    list.add("l");
    list.add("o");
    list.removeAfter(list.getNodeByValue("e") ?? null);
    
    const nodeOnList: INode<string> = list.getNodeByValue("l") ?? null;
    const nodeToInsert = new Node("i");
    list.insertAfter(nodeOnList, nodeToInsert);

    let listAfterInsert = '' 
    for (const item of list) {
        listAfterInsert += item;
    }
    expect(listAfterInsert).toBe("helio");
  });
});
