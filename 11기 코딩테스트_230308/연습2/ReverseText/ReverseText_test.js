import assert from 'assert'
import solution from './ReverseText.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const s = 'apple'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('elppa', result)
    done();
  });

  it('test 2', function (done) {
    // given
    const s = 'ApPlE'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('ElPpA', result)
    done();
  });

  it('test 3', function (done) {
    // given
    const s = 'Orange'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('egnarO', result)
    done();
  });

  it('test 4', function (done) {
    // given
    const s = ''

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('', result)
    done();
  });

  it('test 5', function (done) {
    // given
    const s = 'A'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('A', result)
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
