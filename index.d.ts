export {};

declare global {
  interface Array<T> {
    myMap<U>(callbackfn: (value: T, index: number, array: T[]) => U): U[];
  }
}
