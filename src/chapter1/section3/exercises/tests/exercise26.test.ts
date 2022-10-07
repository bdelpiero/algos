import LinkedList, { buildTextFromList } from '../../LinkedList';

export function remove(list: LinkedList<string>, key: string) {
  let position = 0;
  for (const item of list) {
    if (item === key) {
      list.delete(position);
      // don't increment the counter because the current item was removed
      continue;
    }
    position++;
  }
}

describe('LinkedList', () => {
  it('remove() takes a linked list and a string as arguments and removes all the nodes in the list that have key as its item field', () => {
    const list = new LinkedList<string>();
    list.add('h');
    list.add('e');
    list.add('l');
    list.add('l');
    list.add('o');

    remove(list, 'l');
    remove(list, 'o');

    const listAfterRemove = buildTextFromList(list);
    expect(listAfterRemove).toBe('he');
  });
});
