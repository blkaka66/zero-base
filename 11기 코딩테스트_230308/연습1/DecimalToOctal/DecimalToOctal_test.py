import unittest

from src.com.luckydave.algorithm.fastcampus.supereasy.DecimalToOctal.DecimalToOctal import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        n = 299

        # when
        result = solution(n)

        # then
        self.assertEqual('453', result)

    def test_2(self):
        # given
        n = 1

        # when
        result = solution(n)

        # then
        self.assertEqual('1', result)

    def test_3(self):
        # given
        n = 2924

        # when
        result = solution(n)

        # then
        self.assertEqual('5554', result)

    def test_4(self):
        # given
        n = 94829

        # when
        result = solution(n)

        # then
        self.assertEqual('271155', result)

    def test_5(self):
        # given
        n = 342

        # when
        result = solution(n)

        # then
        self.assertEqual('526', result)

    def test_6(self):
        # given
        n = 2357182

        # when
        result = solution(n)

        # then
        self.assertEqual('10773676', result)


if __name__ == '__main__':
    unittest.main()
