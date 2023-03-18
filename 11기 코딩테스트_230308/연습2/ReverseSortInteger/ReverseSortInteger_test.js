import assert from 'assert'
import solution from './ReverseSortInteger.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr = [31, 33, 31, 12, 96, 10, 3]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual([96, 33, 31, 31, 12, 10, 3], result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr = [20, 41, 27, 6, 92, 30, 60, 83, 64, 23]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual([92, 83, 64, 60, 41, 30, 27, 23, 20, 6], result)
    done();
  });

  it('test 3', function (done) {
    // given
    const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], result)
    done();
  });

  it('test 4', function (done) {
    // given
    const arr = []

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual([], result)
    done();
  });

  it('test 5', function (done) {
    // given
    const arr = [1]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual([1], result)
    done();
  });

  it('test 6', function (done) {
    // given
    const arr = [100]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual([100], result)
    done();
  });
})
