import unittest

from src.com.luckydave.algorithm.fastcampus.medium.CountEqualWithDividedNumber.CountEqualWithDividedNumber import \
    solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        nums = [4, 1, 2, 1, 4]
        d = 2

        # when
        result = solution(nums, d)

        # then
        self.assertEqual(1, result)

    def test_2(self):
        # given
        nums = [6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6]
        d = 3

        # when
        result = solution(nums, d)

        # then
        self.assertEqual(2, result)

    def test_3(self):
        # given
        nums = [2]
        d = 2

        # when
        result = solution(nums, d)

        # then
        self.assertEqual(0, result)

    def test_4(self):
        # given
        nums = []
        d = 3

        # when
        result = solution(nums, d)

        # then
        self.assertEqual(0, result)

    def test_5(self):
        # given
        nums = [10, 10]
        d = 10

        # when
        result = solution(nums, d)

        # then
        self.assertEqual(1, result)

    def test_6(self):
        # given
        nums = [10, 8, 6, 4, 2, 10, 8, 6, 4, 2]
        d = 2

        # when
        result = solution(nums, d)

        # then
        self.assertEqual(5, result)


if __name__ == '__main__':
    unittest.main()
