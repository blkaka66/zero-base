def solution(s):
    """
    :param s: str
    :return: boolean
    """

    alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for c in alphabet:
        if s.find(c) < 0:
            return False

    return True
