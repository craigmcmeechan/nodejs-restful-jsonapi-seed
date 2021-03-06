/**
 * Provides utility methods.
 */
export class Utils {

  /**
   * Create a new instance of Utils.
   */
  constructor() {

  }

  /**
   * Compare an array of REGEX to a given value.
   *
   * @memberof Utils
   * @method matches
   * @static
   *
   * @param {Array} items
   *   Array to search.
   *
   * @param {String} val
   *   Search value.
   *
   * @return {Boolean|undefined}
   *
   * @example
   *   let items = [
   *     'foo',
   *     'b.*',
   *     'qux'
   *   ];
   *
   *   let result = Utils.matches(items, 'bar');
   *   // returns true
   */
  static matches(items, val) {
    for (let i = 0; i < items.length; i++) {
      let regex = new RegExp(items[i] + '$');
      if (regex.test(val)) {
        return true;
      }
    }
  }

  /**
   * Execute promised operation in sequential order.
   *
   * @memberof Utils
   * @method promiseTasks
   * @static
   *
   * @param {String} name
   *   Task name.
   *
   * @param {Array} tasks
   *   Array of promised actions.
   *
   * @return {Promise}
   *
   * @example
   *   let tasks = [
   *     Promise.resolve(),
   *     Promise.resolve(),
   *     Promise.resolve(),
   *
   *     ..
   *   ];
   *
   *   Utils.promiseTasks('Operation', tasks)
   *     .then(obj => obj)
   *     .catch(function(err) {
   *
   *     });
   */
  static promiseTasks(name, tasks) {
    return tasks.reduce(function(current, next) {
      return current.then(next);
    }, Promise.resolve([]))
      .then(obj => obj)
      .catch(function(err) {
        throw new Error(`${name} failed due to ${err.message}`);
      });
  }
}

/**
 * @export default Utils
 */
export default Utils;
