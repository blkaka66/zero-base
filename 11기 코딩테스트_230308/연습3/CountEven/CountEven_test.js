import assert from 'assert'
import solution from './CountEven.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr = [1, 9, 9, 1, 3, 2, 6]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(2, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr = [1, 72, 24]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(2, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const arr = [3, 3, 3, 3, 10]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const arr = [8, 3, 6, 2, 6, 1, 5, 9, 7, 4]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(5, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const arr = []

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const arr = [90, 7, 28, 69, 87, 98, 85, 16, 54, 18]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(6, result)
    done();
  });
})
