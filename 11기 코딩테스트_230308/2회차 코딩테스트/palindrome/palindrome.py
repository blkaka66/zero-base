def solution(S):
    for i in range(len(S)/2):
        if S[i] != S[-1 -i]:
            return 0
    return 1
