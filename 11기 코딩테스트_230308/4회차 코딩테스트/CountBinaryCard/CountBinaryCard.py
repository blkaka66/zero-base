from functools import reduce


def solution(n):
    """
    :param n: int
    :return: int
    """

    # 중복된 결과를 저장
    dp = [0]

    # 2의 배수로 반복되는 bit 처리를 위함
    offset = 1

    for i in range(1, n + 1):
        if offset * 2 == i:
            offset *= 2

        dp.insert(i, dp[i - offset] + 1)

    # 0부터 n까지 필요한 붉은색 종이수
    return reduce(lambda a, b: a + b, dp, 0)
