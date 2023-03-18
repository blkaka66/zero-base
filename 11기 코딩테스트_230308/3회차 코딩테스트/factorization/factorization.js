function GCD(a, b)
{
  if (b == 0)
  {
    return a;
  }
  else
  {
    return GCD(b, a%b);
  }
}

function solution(A, B)
{
  var gcd = GCD(A, B);
  var gcdA = 0;
  var gcdB = 0;

  while (gcdA != 1)
  {
    gcdA = GCD(A, gcd);
    A = A / gcdA
  }

  while (gcdB != 1)
  {
    gcdB = GCD(B, gcd);
    B = B / gcdB;
  }

  if (A == 1 && B == 1)
  {
    return 1;
  }
  else{
    return 0;
  }
}
