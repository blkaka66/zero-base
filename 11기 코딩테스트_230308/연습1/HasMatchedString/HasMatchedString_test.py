import unittest

from src.com.luckydave.algorithm.fastcampus.supereasy.HasMatchedString.HasMatchedString import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        s = 'ka'
        target = 'kakao'

        # when
        result = solution(s, target)

        # then
        self.assertEqual(True, result)

    def test_2(self):
        # given
        s = ''
        target = 'naver'

        # when
        result = solution(s, target)

        # then
        self.assertEqual(True, result)

    def test_3(self):
        # given
        s = 'Goo'
        target = 'google'

        # when
        result = solution(s, target)

        # then
        self.assertEqual(False, result)

    def test_4(self):
        # given
        s = 'z'
        target = 'abcdefg'

        # when
        result = solution(s, target)

        # then
        self.assertEqual(False, result)

    def test_5(self):
        # given
        s = 'ObJect'
        target = 'ObJect'

        # when
        result = solution(s, target)

        # then
        self.assertEqual(True, result)

    def test_6(self):
        # given
        s = 'apple'
        target = ''

        # when
        result = solution(s, target)

        # then
        self.assertEqual(False, result)


if __name__ == '__main__':
    unittest.main()
