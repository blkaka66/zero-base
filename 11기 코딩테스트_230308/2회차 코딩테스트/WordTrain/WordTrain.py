def solution(s):
    """
    :param s: str
    :return: int
    """

    alphabets = {}
    fromIndex = 0
    result = 0

    for i, c in enumerate(s):
        if c in alphabets and fromIndex <= alphabets[c]:
            fromIndex = alphabets[c] + 1

        alphabets[c] = i
        result = max(result, (i - fromIndex) + 1)

    return result
