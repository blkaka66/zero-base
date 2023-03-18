import unittest

from src.com.luckydave.algorithm.fastcampus.supereasy.ReverseSortInteger.ReverseSortInteger import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        arr = [31, 33, 31, 12, 96, 10, 3]

        # when
        result = solution(arr)

        # then
        self.assertEqual([96, 33, 31, 31, 12, 10, 3], result)

    def test_2(self):
        # given
        arr = [20, 41, 27, 6, 92, 30, 60, 83, 64, 23]

        # when
        result = solution(arr)

        # then
        self.assertEqual([92, 83, 64, 60, 41, 30, 27, 23, 20, 6], result)

    def test_3(self):
        # given
        arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

        # when
        result = solution(arr)

        # then
        self.assertEqual([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], result)

    def test_4(self):
        # given
        arr = []

        # when
        result = solution(arr)

        # then
        self.assertEqual([], result)

    def test_5(self):
        # given
        arr = [1]

        # when
        result = solution(arr)

        # then
        self.assertEqual([1], result)

    def test_6(self):
        # given
        arr = [100]

        # when
        result = solution(arr)

        # then
        self.assertEqual([100], result)


if __name__ == '__main__':
    unittest.main()
