import { _03 as _ } from '../src'
import * as O from 'fp-ts/Option'

describe('Problem 03 - Working with lists', () => {
  it('1', () => {
    expect(_.at1(2)([1, 2, 3])).toEqual(O.some(2))
    expect(_.at1(0)([1, 2, 3])).toEqual(O.none)
    expect(_.at1(-1)([1, 2, 3])).toEqual(O.none)
    expect(_.at1(10)([1, 2, 3])).toEqual(O.none)
  })
  it('2', () => {
    expect(_.at2(2)([1, 2, 3])).toEqual(O.some(2))
    expect(_.at2(0)([1, 2, 3])).toEqual(O.none)
    expect(_.at2(-1)([1, 2, 3])).toEqual(O.none)
    expect(_.at2(10)([1, 2, 3])).toEqual(O.none)
  })
})
