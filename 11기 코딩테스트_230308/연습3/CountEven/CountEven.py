from functools import reduce


def solution(arr):
    """
    :param arr: int[]
    :return: int
    """

    return reduce(lambda pre, cur: pre + (1 if cur % 2 == 0 else 0), arr, 0)
