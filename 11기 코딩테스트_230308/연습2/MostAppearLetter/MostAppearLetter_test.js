import assert from 'assert'
import solution from './MostAppearLetter.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const s = 'google'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('g', result)
    done();
  });

  it('test 2', function (done) {
    // given
    const s = 'algorithm'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('a', result)
    done();
  });

  it('test 3', function (done) {
    // given
    const s = 'ajseifnaslgksadkjfsdjfklskfjlsajlf'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('s', result)
    done();
  });

  it('test 4', function (done) {
    // given
    const s = 'azbbddddbbza'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('b', result)
    done();
  });

  it('test 5', function (done) {
    // given
    const s = 'a'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('a', result)
    done();
  });

  it('test 6', function (done) {
    // given
    const s = 'z'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('z', result)
    done();
  });
})
