export {};

declare global {
  interface Array<T> {
    myMap<U>(callbackfn: (value: T, index: number, array: T[]) => U): U[];
  }
}

module.exports = function () {
  if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
      if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError(`Array.prototype.myMap was called on wrong type.`);
      }

      if (typeof callback !== "function") {
        throw new TypeError(
          `Array.prototype.myMap ${callback} is not a function.`
        );
      }

      const result = [];

      for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
      }

      return result;
    };
  }
};
