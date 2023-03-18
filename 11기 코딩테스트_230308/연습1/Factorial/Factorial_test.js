import assert from 'assert'
import solution from './Factorial.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const n = 5

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(120, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const n = 1

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const n = 2

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(2, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const n = 7

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(5040, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const n = 10

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(3628800, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const n = 12

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(479001600, result)
    done();
  });
})
