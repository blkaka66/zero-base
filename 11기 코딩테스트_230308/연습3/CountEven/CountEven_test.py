import unittest

from src.com.luckydave.algorithm.fastcampus.supereasy.CountEven.CountEven import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        arr = [1, 9, 9, 1, 3, 2, 6]

        # when
        result = solution(arr)

        # then
        self.assertEqual(2, result)

    def test_2(self):
        # given
        arr = [1, 72, 24]

        # when
        result = solution(arr)

        # then
        self.assertEqual(2, result)

    def test_3(self):
        # given
        arr = [3, 3, 3, 3, 10]

        # when
        result = solution(arr)

        # then
        self.assertEqual(1, result)

    def test_4(self):
        # given
        arr = [8, 3, 6, 2, 6, 1, 5, 9, 7, 4]

        # when
        result = solution(arr)

        # then
        self.assertEqual(5, result)

    def test_5(self):
        # given
        arr = []

        # when
        result = solution(arr)

        # then
        self.assertEqual(0, result)

    def test_6(self):
        # given
        arr = [90, 7, 28, 69, 87, 98, 85, 16, 54, 18]

        # when
        result = solution(arr)

        # then
        self.assertEqual(6, result)


if __name__ == '__main__':
    unittest.main()
