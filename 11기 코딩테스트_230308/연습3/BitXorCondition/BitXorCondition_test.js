import assert from 'assert'
import solution from './BitXorCondition.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr = ['10110', '1010', '11110']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(2, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr = ['1101']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(13, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const arr = []

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const arr = ['101010', '10101']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(63, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const arr = ['110011', '101010', '111110']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(39, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const arr = ['11111', '1010101', '1110111']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(61, result)
    done();
  });
})
