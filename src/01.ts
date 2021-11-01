import * as RA from 'fp-ts/ReadonlyArray'
import * as RNEA from 'fp-ts/ReadonlyNonEmptyArray'
import * as O from 'fp-ts/Option'
import { constant, flow, pipe } from 'fp-ts/function'
import { constSecond } from './utils'

/**
 *
 * Some standard libraries, including Haskell's `Prelude`, has a function
 * called "last". The problem with this function is that it will throw an
 * error if the array/list is empty. Many libraries will instead make use
 * of the Maybe/Option type to ensure that their operations-that-can-fail
 * are represented with a monadic, safe interface. This also ensures that
 * the functions are "total".
 *
 * @description
 * 1. Write a function that (safely) returns the last element of a list.
 *
 *     last :: List<A> -> Option<A>
 *
 */
export const ___info = undefined

/**
 * First, we can just re-use the library function, `RA.last`.
 */
export const last0: <A>(as: ReadonlyArray<A>) => O.Option<A> = RA.last

/**
 * Here's an example of recursion in language that's not optimized for recursion.
 */
export const last1 = <A>(as: ReadonlyArray<A>): O.Option<A> => {
  if (RA.isEmpty(as)) return O.none
  else if (as.length === 1) return O.some(as[0])
  else return last1(as.slice(1))
}

/**
 * Using `foldRight` to get the last element.
 */
export const last2: <A>(as: ReadonlyArray<A>) => O.Option<A> = flow(
  RA.foldRight(constant(O.none), (_, b) => O.some(b))
)

/**
 * Another slow operation where we first reverse the the list, then get the
 * first element.
 */
export const last3: <A>(as: ReadonlyArray<A>) => O.Option<A> = flow(
  RA.reverse,
  RA.head
)

/**
 * Using `reduce` (foldl)
 */
export const last4 = <A>(as: ReadonlyArray<A>): O.Option<A> =>
  pipe(
    as,
    RA.reduce(O.none as O.Option<A>, (_, a) => O.some(a))
  )

/**
 * Using RA.lookup
 */
export const last5 = <A>(as: ReadonlyArray<A>): O.Option<A> =>
  pipe(as, RA.lookup(as.length - 1))

/**
 * Using O.tryCatch
 */
export const last6 = <A>(as: ReadonlyArray<A>): O.Option<A> =>
  O.tryCatch(() => as[as.length - 1])

/**
 * Using RNEA.matchRight
 *
 * @note In this case, we know the list is not empty, so it's guarenteed
 * to be safe at the type level, and we don't have to use an Option in
 * order to ensure that the function is total.
 */
export const last7: <A>(as: RNEA.ReadonlyNonEmptyArray<A>) => A =
  RNEA.matchRight(constSecond)
