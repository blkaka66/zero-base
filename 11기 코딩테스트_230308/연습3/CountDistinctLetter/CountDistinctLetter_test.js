import assert from 'assert'
import solution from './CountDistinctLetter.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const s = 'google'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(4, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const s = 'navigate'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(7, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const s = 'window'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(5, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const s = ''

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const s = 'z'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const s = 'problem'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(7, result)
    done();
  });
})
