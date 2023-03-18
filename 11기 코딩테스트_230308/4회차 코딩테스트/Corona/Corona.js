/**
 * @param history {number[]}
 * @param infected {number}
 * @return {number[]}
 */
function solution(history, infected) {
  const n = history.length / 2;
  const visited = new Array(n).fill(0);
  const contact = Array.from(Array(n), () => new Array(n).fill(0));

  for (let i = 0; i < history.length; i++) {
    const userIndex = Math.abs(history[i]) - 1;

    visited[userIndex] = true ^ visited[userIndex];
    setContact(contact, visited);
  }

  return getContactUsers(contact, infected);
}

function setContact(contact, visited) {
  for (let i = 0; i < visited.length; i++) {
    for (let j = 0; j < visited.length; j++) {
      if (visited[i] === 1 && visited[j] === 1 && i !== j) {
        contact[i][j] = 1;
        contact[j][i] = 1;
      }
    }
  }
}

function getContactUsers(contact, infected) {
  const infectedIndex = infected - 1;
  const contactUserNo = [];

  for (let i = 0; i < contact.length; i++) {
    if (contact[infectedIndex][i] === 1) {
      contactUserNo.push(i + 1);
    }
  }

  return contactUserNo;
}

solution
