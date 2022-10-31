import { getRandomInt } from '../../../utils/functions'
import { threeSumFast } from '../threeSumFast'
import threeSum from '../threeSum'

describe('threeSumFast', () => {
  it('counts the number of triples in a file of N integers that sum to 0', () => {
    const a: number[] = []
    for (let i = 0; i < 2000; i++) {
      a[i] = getRandomInt(-1000000, 1000000)
    }
    const cnt = threeSum(a)
    expect(threeSumFast(a)).toBe(cnt)
  })
})
