import numpy


def solution(history, infected):
    """
    :param history: int[]
    :param infected: int
    :return: int[]
    """

    n = int(len(history) / 2)
    visited = [0] * n
    contact = numpy.zeros(shape=(n, n))

    for i in range(len(history)):
        userIndex = abs(history[i]) - 1

        visited[userIndex] = True ^ visited[userIndex]
        setContact(contact, visited)

    return getContactUsers(contact, infected)


def setContact(contact, visited):
    for i in range(len(visited)):
        for j in range(len(visited)):
            if visited[i] == 1 and visited[j] == 1 and i != j:
                contact[i][j] = 1
                contact[j][i] = 1


def getContactUsers(contact, infected):
    infectedIndex = infected - 1
    contactUserNo = []

    for i in range(len(contact)):
        if contact[infectedIndex][i] == 1:
            contactUserNo.append(i + 1)

    return contactUserNo
