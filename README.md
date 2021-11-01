# 99 Problems in TypeScript (using `fp-ts`)

Solutions for the "99 Problems" problem set, as made popular by other languages:

- [Prolog](https://sites.google.com/site/prologsite/prolog-problems/)
- [Lisp](https://www.ic.unicamp.br/~meidanis/courses/mc336/2006s2/funcional/L-99_Ninety-Nine_Lisp_Problems.html)
- [OCaml](https://ocaml.org/learn/tutorials/99problems.html)
- [Haskell](https://wiki.haskell.org/H-99:_Ninety-Nine_Haskell_Problems)

Since these are examples from functional languages, with the exception of Prolog, we'll use
some data types and utility functions within `fp-ts`, a functional library for TypeScript.

### Goals

1. Collect a bunch of examples of solving the 99 Problems in various ways.
2. Provide explanations and motivations.
3. Perform property-based tests using `fast-check`.
4. Benchmark the different ansers to compare performance characteristics.
