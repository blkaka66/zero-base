import assert from 'assert'
import solution from './DecimalToHexadecimal.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const n = 239

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('ef', result)
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
    const n = 292184

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('47558', result)
    done();
  });

  it('test 4', function (done) {
    // given
    const n = 94328293

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('59f55e5', result)
    done();
  });

  it('test 5', function (done) {
    // given
    const n = 3426

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('d62', result)
    done();
  });

  it('test 6', function (done) {
    // given
    const n = 842357182

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual('323559be', result)
    done();
  });
})
