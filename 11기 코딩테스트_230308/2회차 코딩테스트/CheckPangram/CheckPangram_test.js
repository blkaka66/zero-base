import assert from 'assert'
import solution from './CheckPangram.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const s = 'abcdefghijklmnopqrstuvwxyz'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const s = 'a b c d e f g h i j k l m n o p q r s t u v w x y z a b c'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const s = 'bcdefghijklmnopqrstuvwxyz'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const s = 'aaaaaaaaaaaaaaaaaaaaaaaaaa'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const s = 'nasoiegasjflkesklfjaslkdfjsla'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const s = 'thequickbrownfoxjumpsoverthelazydog'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });
})
