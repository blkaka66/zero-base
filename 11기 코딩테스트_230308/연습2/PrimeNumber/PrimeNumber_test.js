import assert from 'assert'
import solution from './PrimeNumber.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const n = 7

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const n = 417

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const n = 633

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const n = 92837

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const n = 982374

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const n = 73049183

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });
})
