import assert from 'assert'
import solution from './Fibonacci.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const n = 6

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(8, result)
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
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const n = 10

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(55, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const n = 33

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(3524578, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const n = 40

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(102334155, result)
    done();
  });
})
