// import * as RA from 'fp-ts/ReadonlyArray'
export * from 'fp-ts/ReadonlyArray'

/**
 * Pipeable version of Array.prototype.length
 */
export const len = <A>(as: ReadonlyArray<A>): number => as.length

/**
 * Check if the length of an array is longer than (n)
 */
export const lenGt =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): boolean =>
    len(as) > n

/**
 * Check if the length of an array is shorter than (n)
 */
export const lenLt =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): boolean =>
    len(as) < n
