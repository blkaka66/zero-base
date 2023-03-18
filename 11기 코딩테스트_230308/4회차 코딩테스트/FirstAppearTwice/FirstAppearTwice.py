def solution(s):
    """
    :param s: string
    :return: string
    """

    charMap = dict()

    for c in s:
        if charMap.get(c) is None:
            charMap.setdefault(c, True)
        else:
            return c

    return ''
