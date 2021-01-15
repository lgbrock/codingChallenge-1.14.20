// Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function.//

let nameList = []

function addToArray(userName) {
  nameList.push('userName');
  console.log(`Welome ${userName}, you are at the ${nameList.length} position`)
}

addToArray('Turkey Dog');