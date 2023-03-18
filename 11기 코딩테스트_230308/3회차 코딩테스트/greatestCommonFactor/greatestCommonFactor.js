function GCD(a, b)
{
  if (b == 0)
  {
    return a;
  }
  else
  {
    return GCD(b, a % b);
  }
}

function solution(A)
{
  A.sort();

  result = GCD(A[0], A[1]);

  for (var i = 2; i < A.length; i++)
  {
    result = GCD(result, A[i]);
  }

  return result;
}