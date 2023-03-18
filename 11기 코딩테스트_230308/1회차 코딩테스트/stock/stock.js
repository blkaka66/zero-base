function solution(A)
{
  var result = [];

  for (var i = 0; i < A.length - 1; i++)
  {
    for (var j = i + 1; j < A.length; j++)
    {
      if (A[i] < A[j])
      {
        result.push(A[j] - A[i]);
      }
    }
  }

  return result.length == 0 ? 0 : Math.max.apply(null, result);
}
