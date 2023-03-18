import assert from 'assert'
import solution from './FirstAppearTwice.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const s = 'google'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('o', result)
    done();
  });

  it('test 2', function (done) {
    // given
    const s = 'naver'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('', result)
    done();
  });

  it('test 3', function (done) {
    // given
    const s = 'abcdefghijklmnopqrstuvwxyzz'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('z', result)
    done();
  });

  it('test 4', function (done) {
    // given
    const s = 'aabcdefghijklmnopqrstuvwxyzz'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('a', result)
    done();
  });

  it('test 5', function (done) {
    // given
    const s = 'aabcdefghijklmnopqrstuvwxyz'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('a', result)
    done();
  });

  it('test 6', function (done) {
    // given
    const s = 'pvdfpgbnvx'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('p', result)
    done();
  });
})
