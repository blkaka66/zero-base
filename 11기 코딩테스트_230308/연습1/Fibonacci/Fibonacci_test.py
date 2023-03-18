import unittest

from src.com.luckydave.algorithm.fastcampus.supereasy.Fibonacci.Fibonacci import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        n = 6

        # when
        result = solution(n)

        # then
        self.assertEqual(8, result)

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
        self.assertEqual(1, result)

    def test_4(self):
        # given
        n = 10

        # when
        result = solution(n)

        # then
        self.assertEqual(55, result)

    def test_5(self):
        # given
        n = 33

        # when
        result = solution(n)

        # then
        self.assertEqual(3524578, result)

    def test_6(self):
        # given
        n = 40

        # when
        result = solution(n)

        # then
        self.assertEqual(102334155, result)


if __name__ == '__main__':
    unittest.main()
