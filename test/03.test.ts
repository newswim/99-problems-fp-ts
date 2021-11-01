import { _03 as _ } from '../src'
import * as O from 'fp-ts/Option'

describe('Problem 03 - Working with lists', () => {
  it('1', () => {
    expect(_.at1(2)([1, 2, 3])).toEqual(O.some(2))
  })
  it('2', () => {
    expect(_.at2(2)([1, 2, 3])).toEqual(O.some(2))
  })
})
