import { flow, tuple } from 'fp-ts/function'
import * as RA from '../lib/ReadonlyArray'
import * as O from 'fp-ts/lib/Option'

/**
 * Tuples have recently gotten a lot more type-level support in TypeScript,
 * but it's still a bit awkward to marshalling between Array and Tuples,
 * as you'll see...
 *
 * @description
 * 2. Find the last two (last and penultimate) elements of a list. (easy)
 *
 *     lastTwo :: List<A> -> Option<[A, A]>
 *
 */
export const ___info = undefined

/**
 * Using a recursive function and awkward pattern matching...
 */
export const lastTwo1 = <A>(as: ReadonlyArray<A>): O.Option<[A, A]> => {
  if (as.length === 0) return O.none
  if (as.length === 1) return O.none
  if (as.length === 2) {
    return O.some(tuple(as[0], as[1]))
  } else {
    return lastTwo1(as.slice(1))
  }
}

/**
 * Using built-in fp-ts functions, `takeRight`
 */
export const lastTwo2: <A>(as: ReadonlyArray<A>) => O.Option<[A, A]> = flow(
  O.fromPredicate(RA.lenGt(2)),
  O.map(RA.takeRight(2)),
  O.map((as) => tuple(as[0], as[1]))
)
