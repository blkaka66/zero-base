import unittest

from src.com.luckydave.algorithm.fastcampus.supereasy.CountDistinctLetter.CountDistinctLetter import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        s = 'google'

        # when
        result = solution(s)

        # then
        self.assertEqual(4, result)

    def test_2(self):
        # given
        s = 'navigate'

        # when
        result = solution(s)

        # then
        self.assertEqual(7, result)

    def test_3(self):
        # given
        s = 'window'

        # when
        result = solution(s)

        # then
        self.assertEqual(5, result)

    def test_4(self):
        # given
        s = ''

        # when
        result = solution(s)

        # then
        self.assertEqual(0, result)

    def test_5(self):
        # given
        s = 'z'

        # when
        result = solution(s)

        # then
        self.assertEqual(1, result)

    def test_6(self):
        # given
        s = 'problem'

        # when
        result = solution(s)

        # then
        self.assertEqual(7, result)


if __name__ == '__main__':
    unittest.main()
