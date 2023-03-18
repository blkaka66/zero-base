import unittest

from src.com.luckydave.algorithm.fastcampus.supereasy.Factorial.Factorial import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        n = 5

        # when
        result = solution(n)

        # then
        self.assertEqual(120, result)

    def test_2(self):
        # given
        n = 1

        # when
        result = solution(n)

        # then
        self.assertEqual(1, result)

    def test_3(self):
        # given
        n = 2

        # when
        result = solution(n)

        # then
        self.assertEqual(2, result)

    def test_4(self):
        # given
        n = 7

        # when
        result = solution(n)

        # then
        self.assertEqual(5040, result)

    def test_5(self):
        # given
        n = 10

        # when
        result = solution(n)

        # then
        self.assertEqual(3628800, result)

    def test_6(self):
        # given
        n = 12

        # when
        result = solution(n)

        # then
        self.assertEqual(479001600, result)


if __name__ == '__main__':
    unittest.main()
