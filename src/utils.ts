///////////////////////////
//      Combinators
///////////////////////////

export const constFirst =
  <A>(a: A) =>
  <B>(_: B) =>
    a
export const constSecond =
  <A>(_: A) =>
  <B>(b: B) =>
    b
export const id = <A>(a: A) => a
export const kite = constFirst(id)
// ap :: (a -> b -> c) -> (a -> b) -> a -> c = f(a)(g(a))
// export const ap: <A, B>(a: A, b: B) =>

export const K = constFirst
export const I = id
export const KI = kite

// TODO: implement me
// https://crocks.dev/docs/functions/combinators.html
export const psi = undefined
export const converge = undefined

/////////////////
// Function
/////////////////

export const curry =
  <A, B, C>(f: (a: A, b: B) => C) =>
  (a: A) =>
  (b: B) =>
    f(a, b)

export const curry3 =
  <A, B, C, D>(f: (a: A, b: B, c: C) => D) =>
  (a: A) =>
  (b: B) =>
  (c: C) =>
    f(a, b, c)

export const uncurry =
  <A, B, C>(f: (a: A) => (b: B) => C): ((a: A, b: B) => C) =>
  (a, b) =>
    f(a)(b)

export const uncurry3 =
  <A, B, C, D>(f: (a: A) => (b: B) => (c: C) => D): ((a: A, b: B, c: C) => D) =>
  (a, b, c) =>
    f(a)(b)(c)
