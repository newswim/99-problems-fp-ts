import { _02 as _ } from '../src'
import * as O from 'fp-ts/Option'

describe('Problem 02 - Working with lists', () => {
  it('1', () => {
    expect(_.lastTwo0([1, 2, 3])).toEqual(O.some([2, 3]))
  })
  it('2', () => {
    expect(_.lastTwo1([1, 2, 3])).toEqual(O.some([2, 3]))
  })
})
