const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let names= [];
  if(Array.isArray(members)){
      for(let i = 0; i < members.length; i++){
          if(typeof members[i] == 'string'){
              members[i] = members[i].trim();
              names.push(members[i][0].toUpperCase());
          }
      }
  }
  return names.sort().join('')
};
