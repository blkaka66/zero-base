import assert from 'assert'
import solution from './MostAppearInteger.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const s = 1559

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(5, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const s = 19910326

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const s = 98765432

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(2, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const s = 10292938

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(2, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const s = 1

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const s = 9

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(9, result)
    done();
  });
})
