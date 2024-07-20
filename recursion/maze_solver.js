let maze = [
  "########E#", //
  "#        #", //
  "###### ###", //
  "#        #", //
  "#S########", //
];

function traverse(maze, hor, ver) {
  console.log(hor, ver);
  console.log(`(${maze[ver][hor]})`);

  if (maze[ver][hor] === "#" || maze[ver][hor] === "E") {
    return [ver, hor];
  }

  // subtract since we start from bottom and we climb up
  let top = traverse(maze, hor, ver - 1);
  if (maze[top[0]][top[1]] === "E") {
    return top;
  }

  let right = traverse(maze, hor + 1, ver);
  if (maze[right[0]][right[1]] === "E") {
    return right;
  }

  // adding since we are at top and want to go down
  let bottom = traverse(maze, hor, ver + 1);
  if (maze[bottom[0]][bottom[1]] === "E") {
    return bottom;
  }

  let left = traverse(maze, hor - 1, ver);
  if (maze[left[0]][left[1]] === "E") {
    return left;
  }
}

console.log(traverse(maze, 1, 2));
