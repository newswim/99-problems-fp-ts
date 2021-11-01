import { _01 as _ } from '../src'
import * as O from 'fp-ts/Option'

describe('Problem 01 - Working with lists', () => {
  it('1', () => {
    expect(_.last1([1, 2, 3])).toEqual(O.some(3))
  })
  it('2', () => {
    expect(_.last2([1, 2, 3])).toEqual(O.some(3))
  })
  it('3', () => {
    expect(_.last3([1, 2, 3])).toEqual(O.some(3))
  })
  it('4', () => {
    expect(_.last4([1, 2, 3])).toEqual(O.some(3))
  })
  it('5', () => {
    expect(_.last5([1, 2, 3])).toEqual(O.some(3))
  })
  it('6', () => {
    expect(_.last6([1, 2, 3])).toEqual(O.some(3))
  })
})
