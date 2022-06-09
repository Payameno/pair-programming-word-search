//Pair programming with @Enired

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join('')); //MAPS THROUGH ARRAYS/CREATE STRING
  for (s of horizontalJoin) {
      if (s.includes(word)) return true;
  };

  let verticalArr = [];
  for(let i = 0; i < letters[0].length; i++){
    verticalArr.push([]);
  };


  for(let i=0; i<letters.length; i++){
    for(let j = 0; j < letters[i].length; j++){
      verticalArr[j].push(letters[i][j]);
    };
  };

  const verticalJoin = verticalArr.map(ls => ls.join(''))
  for (s of verticalJoin) {
      if (s.includes(word)) return true;
  };

  return false;

}

module.exports = wordSearch