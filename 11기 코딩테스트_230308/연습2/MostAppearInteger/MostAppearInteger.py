import math


def solution(n):
    """
    :param n: number
    :return: number
    """

    num_counter = {}
    while (1 <= n):
        i = math.floor(n % 10)
        num_counter[i] = num_counter[i] + 1 if i in num_counter else 1

        n /= 10

    most_appear_number = None
    appear_count = 0
    for num, count in sorted(num_counter.items()):
        if appear_count < count:
            most_appear_number = num
            appear_count = count

    return most_appear_number
