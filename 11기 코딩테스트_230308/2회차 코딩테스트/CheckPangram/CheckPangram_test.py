import unittest

from src.com.luckydave.algorithm.fastcampus.medium.CheckPangram.CheckPangram import solution


class CustomTestCase(unittest.TestCase):

    def test_1(self):
        # given
        s = 'abcdefghijklmnopqrstuvwxyz'

        # when
        result = solution(s)

        # then
        self.assertEqual(True, result)

    def test_2(self):
        # given
        s = 'a b c d e f g h i j k l m n o p q r s t u v w x y z a b c'

        # when
        result = solution(s)

        # then
        self.assertEqual(True, result)

    def test_3(self):
        # given
        s = 'bcdefghijklmnopqrstuvwxyz'

        # when
        result = solution(s)

        # then
        self.assertEqual(False, result)

    def test_4(self):
        # given
        s = 'aaaaaaaaaaaaaaaaaaaaaaaaaa'

        # when
        result = solution(s)

        # then
        self.assertEqual(False, result)

    def test_5(self):
        # given
        s = 'nasoiegasjflkesklfjaslkdfjsla'

        # when
        result = solution(s)

        # then
        self.assertEqual(False, result)

    def test_6(self):
        # given
        s = 'thequickbrownfoxjumpsoverthelazydog'

        # when
        result = solution(s)

        # then
        self.assertEqual(True, result)


if __name__ == '__main__':
    unittest.main()
