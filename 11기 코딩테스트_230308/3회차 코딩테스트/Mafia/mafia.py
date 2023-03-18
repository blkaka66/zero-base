def solution(members):
  '''
  :param members: list
  :return: list
  '''
  answer = []
  
  member_set = set()
  for member in members:
    member_set.add(member)
  
  for member in member_set:
    if members.count(member) == 2:
      mafia = member
  
  for idx, member in enumerate(members):
    if member == mafia:
      answer.append(idx)

  return answer
