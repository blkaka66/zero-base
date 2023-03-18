import unittest

from src.com.luckydave.algorithm.fastcampus.easy.FirstAppearTwice.FirstAppearTwice import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        s = 'google'

        # when
        result = solution(s)

        # then
        self.assertEqual('o', result)

    def test_2(self):
        # given
        s = 'naver'

        # when
        result = solution(s)

        # then
        self.assertEqual('', result)

    def test_3(self):
        # given
        s = 'abcdefghijklmnopqrstuvwxyzz'

        # when
        result = solution(s)

        # then
        self.assertEqual('z', result)

    def test_4(self):
        # given
        s = 'aabcdefghijklmnopqrstuvwxyzz'

        # when
        result = solution(s)

        # then
        self.assertEqual('a', result)

    def test_5(self):
        # given
        s = 'aabcdefghijklmnopqrstuvwxyz'

        # when
        result = solution(s)

        # then
        self.assertEqual('a', result)

    def test_6(self):
        # given
        s = 'pvdfpgbnvx'

        # when
        result = solution(s)

        # then
        self.assertEqual('p', result)


if __name__ == '__main__':
    unittest.main()
