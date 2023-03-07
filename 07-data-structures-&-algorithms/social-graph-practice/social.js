// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    const newUser = {
      id: ++this.currentID,
      name: name,
    }

    this.users[newUser.id] = newUser;
    this.follows[newUser.id] = new Set();

    return this.currentID;
  }

  getUser(userID) {
    // Your code here
    for (const id in this.users) {
      if (this.users[id].id === userID) return this.users[id]
    }
    return null;
  }

  follow(userID1, userID2) {
    // Your code here
    if (this.follows[userID1].has(userID2) || !this.users[userID2]) return false;
    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    // Your code here
    return this.follows[userID];
  }

  getFollowers(userID) {
    // Your code here
    let followers = new Set([]);
    for (const users in this.follows) {
      if (this.follows[users].has(userID)) followers.add(Number(users))
    }
    return followers;
  }

  // getRecommendedFollows(userID, degrees) {
  //   // Your code here
  //   // list of recommended friends;
  //   let recommended = [];
  //   // create queue and enqueue the beginning node
  //   let queue = [[userID]];
  //   // create a new Set to keep track of visited nodes
  //   let visited = new Set([userID]);
  //   while (queue.length) {
  //     // remove the first path array from the queue;
  //     let currPath = queue.shift();

  //     // set a pointer to the last node in the path
  //     let currNode = currPath[currPath.length - 1];
  //     // check if the current path separation degree equals the param degree
  //     // if true, add the last node in path to the recommended array list
  //     if (currPath.length - 2 <= degrees) {
  //       if (currNode !== userID && !this.follows[userID].has(currNode)) recommended.push(currNode);
  //     }
  //     // iterate through the neighbors of the last node
  //     let neighbors = [...this.getFollows(currNode)];
  //     neighbors.forEach((v, i) => {
  //       if (!visited.has(v)) {
  //         visited.add(v);
  //         queue.push([...currPath, v]);
  //       }
  //     });
  //   }
  //   return [...recommended];
  // }
}


module.exports = SocialNetwork;
