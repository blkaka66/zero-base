import assert from 'assert'
import solution from './HasMatchedString.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const s = 'ka'
    const target = 'kakao'

    // when
    const result = solution(s, target)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const s = ''
    const target = 'naver'

    // when
    const result = solution(s, target)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const s = 'Goo'
    const target = 'google'

    // when
    const result = solution(s, target)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const s = 'z'
    const target = 'abcdefg'

    // when
    const result = solution(s, target)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const s = 'ObJect'
    const target = 'ObJect'

    // when
    const result = solution(s, target)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const s = 'apple'
    const target = ''

    // when
    const result = solution(s, target)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });
})
