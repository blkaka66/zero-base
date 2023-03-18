function solution(S)
{
  var s = S.replace(/(^0+)/, "");
  var n = 0;

  if (s != "" && s.lnegth != 0)
  {
    n = 1;

    n += (s.match(/1/g).length - 1) * 2;
    n += s.match(/0/g) == null ? 0 : s.match(/0/g).length;
  }

  return n;
}
