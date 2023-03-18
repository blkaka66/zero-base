def GCD(a, b):
    if b == 0: return a
    else: return GCD(b, a%b)

def solution(A, B):

    gcd = GCD(A,B)
    gcdA = 0
    gcdB = 0

    while gcdA != 1:
        gcdA = GCD(A, gcd)
        A = A / gcdA

    while gcdB != 1:
        gcdB = GCD(B, gcd)
        B = B / gcdB

    if A == 1 and B == 1:
        return 1
    else:
        return 0
