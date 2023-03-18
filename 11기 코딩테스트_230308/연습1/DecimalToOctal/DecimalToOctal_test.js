import assert from 'assert'
import solution from './DecimalToOctal.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const n = 299

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('453', result)
    done();
  });

  it('test 2', function (done) {
    // given
    const n = 1

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('1', result)
    done();
  });

  it('test 3', function (done) {
    // given
    const n = 2924

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('5554', result)
    done();
  });

  it('test 4', function (done) {
    // given
    const n = 94829

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('271155', result)
    done();
  });

  it('test 5', function (done) {
    // given
    const n = 342

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('526', result)
    done();
  });

  it('test 6', function (done) {
    // given
    const n = 2357182

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('10773676', result)
    done();
  });
})
