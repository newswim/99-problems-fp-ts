// import { flow, tuple } from 'fp-ts/function'
import * as RA from '../lib/ReadonlyArray'
import * as O from 'fp-ts/lib/Option'

/**
 * We often want to find a particular element in an array,
 * and refer to its place with a cardinal number.
 *
 * This is different from index-based lookup.
 *
 * @description
 * 3. Find the K'th element of a list. (easy)
 *
 *     at :: List<A> -> Option<A>
 *
 */
export const ___info = undefined

/**
 * Another recursive function with awkward pattern matching...
 */
export const at1 =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): O.Option<A> => {
    if (as.length === 0) return O.none
    if (n === 1) {
      return RA.head(as)
    } else {
      return at1(n - 1)(as.slice(1))
    }
  }

/**
 * Using `lookup`, since it's just a matter of changing from
 * index-based to position-based semantics.
 */
export const at2 =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): O.Option<A> =>
    RA.lookup(n - 1)(as)
