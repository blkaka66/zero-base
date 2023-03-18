import assert from 'assert'
import solution from './MostClosestNumberToZero.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr = [5, 2, 1, 3]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr = [7, 1, 7, 4, 6]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const arr = [4, 2, 2]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(2, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const arr = [0]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const arr = [100]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(100, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const arr = [18, 78, 75, 63, 19, 91, 71, 13, 86, 67]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(13, result)
    done();
  });
})
