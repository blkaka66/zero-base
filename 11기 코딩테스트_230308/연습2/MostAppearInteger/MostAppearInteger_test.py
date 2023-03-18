import unittest

from src.com.luckydave.algorithm.fastcampus.supereasy.MostAppearInteger.MostAppearInteger import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        s = 1559

        # when
        result = solution(s)

        # then
        self.assertEqual(5, result)

    def test_2(self):
        # given
        s = 19910326

        # when
        result = solution(s)

        # then
        self.assertEqual(1, result)

    def test_3(self):
        # given
        s = 98765432

        # when
        result = solution(s)

        # then
        self.assertEqual(2, result)

    def test_4(self):
        # given
        s = 10292938

        # when
        result = solution(s)

        # then
        self.assertEqual(2, result)

    def test_5(self):
        # given
        s = 1

        # when
        result = solution(s)

        # then
        self.assertEqual(1, result)

    def test_6(self):
        # given
        s = 9

        # when
        result = solution(s)

        # then
        self.assertEqual(9, result)


if __name__ == '__main__':
    unittest.main()
