const floors = [false, false, false, false, false, false, false, true, true];

function twoCrystals(breaks) {
  const jump = Math.floor(Math.sqrt(breaks.length));

  let nbJumps = 0;
  for (; nbJumps < breaks.length; nbJumps += jump) {
    if (floors[nbJumps]) {
      break;
    }
  }

  for (let index = nbJumps - jump; index < breaks.length; index++) {
    if (floors[index]) {
      return index;
    }
  }

  return -1;
}

console.log(twoCrystals(floors));
