import LinkedList, { buildTextFromList } from '../../LinkedList';

describe('LinkedList.delete', () => {
  let list: LinkedList<string>;

  beforeEach(() => {
    list = new LinkedList<string>();
    list.add('h');
    list.add('e');
    list.add('l');
    list.add('l');
    list.add('o');
  });

  it('delete(0) deletes the first element of a linked list', () => {
    list.delete(0);
    const listAfterRemove = buildTextFromList(list);
    expect(listAfterRemove).toBe('ello');
  });

  it('delete(n) deletes the nth element of a linked list', () => {
    list.delete(2);
    const listAfterRemove = buildTextFromList(list);
    expect(listAfterRemove).toBe('helo');
  });

  it('delete(last) deletes the last element of a linked list', () => {
    list.delete(4);
    const listAfterRemove = buildTextFromList(list);
    expect(listAfterRemove).toBe('hell');
  });

  it('delete(n) throws an exception if n is out of range', () => {
    expect(() => list.delete(5)).toThrowError('Out of range');
    expect(() => list.delete(8)).toThrowError('Out of range');
  });

  it('delete(first) deletes the first element of a one element list', () => {
    const oneElementList = new LinkedList<string>();
    list.add('h');
    list.delete(0);
    const listAfterRemove = buildTextFromList(oneElementList);
    expect(listAfterRemove).toBe('');
  });
});
