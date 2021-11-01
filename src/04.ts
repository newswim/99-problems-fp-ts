//// For the bonus point, implement tail call optimization (lol)
// (I mean, it's not that difficult.. there's an example using a TSC macro)

import * as RA from '../lib/ReadonlyArray'

/**
 * Most languages have a `length` function for Arrays/Lists.
 *
 * @description
 * 4. Find the number of elements of a list. (easy)
 *
 *     length :: List<A> -> number
 *
 */
export const ___info = undefined

/**
 * Another recursive function with awkward pattern matching...
 */
export const length1 = <A>(xs: ReadonlyArray<A>): number => {
  return (function go(n: number, ys: ReadonlyArray<A>): number {
    if (RA.isEmpty(ys)) return n
    return go(n + 1, ys.slice(1))
  })(0, xs)
}

/**
 * Using `reduce`.
 */
export const length2: <A>(as: ReadonlyArray<A>) => number = RA.reduce(
  0,
  (b, _) => b + 1
)

/**
 * Using a helper I added to `lib/ReadonlyArray` that just calls
 * `Array.prototype.length` on a given array.
 */
export const length3: <A>(as: ReadonlyArray<A>) => number = RA.len
