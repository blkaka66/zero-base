def solution(nums, d):
    """
    :param nums: int[]
    :param d: int
    :return: int
    """

    result = 0

    for i in range(len(nums) - 1):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j] and (nums[i] % d) == 0:
                result += 1

    return result
