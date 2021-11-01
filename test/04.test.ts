import { _04 as _ } from '../src'

describe('Problem 04 - Working with lists', () => {
  it('1', () => {
    expect(_.length1([1, 2, 3])).toEqual(3)
    expect(_.length1([])).toEqual(0)
  })
  it('2', () => {
    expect(_.length2([1, 2, 3])).toEqual(3)
    expect(_.length2([])).toEqual(0)
  })
  it('3', () => {
    expect(_.length3([1, 2, 3])).toEqual(3)
    expect(_.length3([])).toEqual(0)
  })
})
