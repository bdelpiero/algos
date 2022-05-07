import LinkedList from "../LinkedList";

export function findInList(list: LinkedList<string>, key: string) {
  for (const item of list) {
    if (item === key) return true;
  }
  return false;
}
