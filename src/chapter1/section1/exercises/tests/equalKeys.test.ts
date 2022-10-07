import { rank, count, verify } from '../equalKeys'

const arr = [1, 2, 4, 4, 5, 6, 6, 7, 7, 7, 8]

it('rank returns how many elements in arr are lower to the key', () => {
  expect(rank(3, arr)).toBe(2)
  expect(rank(5, arr)).toBe(4)
})

it('count returns how many elements in arr are equal to the key', () => {
  expect(count(5, arr)).toBe(1)
  expect(count(7, arr)).toBe(3)
  expect(count(20, arr)).toBe(0)
})

it('If i and j are the values returned by rank(key, a) and count(key, a) respectively, then a[i..i+j-1] are the values in the array that are equal to key', () => {
  expect(verify(7, arr)).toBe(true)
  expect(verify(5, arr)).toBe(true)
})
