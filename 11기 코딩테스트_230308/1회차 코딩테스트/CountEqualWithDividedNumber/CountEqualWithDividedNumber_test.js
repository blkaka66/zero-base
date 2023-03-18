import assert from 'assert'
import solution from './CountEqualWithDividedNumber.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const nums = [4, 1, 2, 1, 4]
    const d = 2

    // when
    const result = solution(nums, d)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const nums = [6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6]
    const d = 3

    // when
    const result = solution(nums, d)

    // then
    assert.deepStrictEqual(2, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const nums = [2]
    const d = 2

    // when
    const result = solution(nums, d)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const nums = []
    const d = 3

    // when
    const result = solution(nums, d)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const nums = [10, 10]
    const d = 10

    // when
    const result = solution(nums, d)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const nums = [10, 8, 6, 4, 2, 10, 8, 6, 4, 2]
    const d = 2

    // when
    const result = solution(nums, d)

    // then
    assert.deepStrictEqual(5, result)
    done();
  });
})
