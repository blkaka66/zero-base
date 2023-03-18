import unittest

from src.com.luckydave.algorithm.fastcampus.supereasy.DecimalToHexadecimal.DecimalToHexadecimal import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        n = 239

        # when
        result = solution(n)

        # then
        self.assertEqual('ef', result)

    def test_2(self):
        # given
        n = 1

        # when
        result = solution(n)

        # then
        self.assertEqual('1', result)

    def test_3(self):
        # given
        n = 292184

        # when
        result = solution(n)

        # then
        self.assertEqual('47558', result)

    def test_4(self):
        # given
        n = 94328293

        # when
        result = solution(n)

        # then
        self.assertEqual('59f55e5', result)

    def test_5(self):
        # given
        n = 3426

        # when
        result = solution(n)

        # then
        self.assertEqual('d62', result)

    def test_6(self):
        # given
        n = 842357182

        # when
        result = solution(n)

        # then
        self.assertEqual('323559be', result)


if __name__ == '__main__':
    unittest.main()
