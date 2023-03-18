def solution(n):
    """
    :param n: number
    :return: number
    """

    first = 1
    second = 1

    for i in range(3, n + 1):
        sum = first + second
        first = second
        second = sum

    return second
