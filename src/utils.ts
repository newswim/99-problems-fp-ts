///////////////////////////
//      Combinators
///////////////////////////

export const constFirst = <A, B>(a: A, _: B) => a // bonus: this is the `K-combinator`
export const constSecond = <A, B>(_: A, b: B) => b //
export const id = <A>(a: A) => a
// ap :: (a -> b -> c) -> (a -> b) -> a -> c = f(a)(g(a))
// export const ap: <A, B>(a: A, b: B) =>

export const K = constFirst
export const I = id

// TODO: implement me
// https://crocks.dev/docs/functions/combinators.html
export const psi = undefined
export const converge = undefined
