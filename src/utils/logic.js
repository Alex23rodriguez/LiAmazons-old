export const _range = (start, end) => {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
};

export const createDiagonalsDict = (size) => {
  let ans = {};

  for (let i = 0; i < size * size; i++) {
    ans[i] = {};
  }
  // horizontal and vertical
  for (let i = 0; i < size; i++) {
    let horizontal = _range(i * size, (i + 1) * size);
    horizontal.forEach((j) => (ans[j]["H"] = horizontal));
    let vertical = Array.from({ length: size }, (_, ind) => i + ind * size);
    vertical.forEach((j) => (ans[j]["V"] = vertical));
  }

  //up-right diagonal
  for (let i = 0; i < size * 2 - 1; i++) {
    let D1 = Array.from(
      { length: size },
      (_, index) => (i - index) * size + index
    );
    D1 = D1.filter((num) => num < size * size && num >= 0);
    D1.reverse();
    D1.forEach((j) => (ans[j]["D1"] = D1));
  }
  // up-left diagonal
  for (let i = -size + 1; i < size; i++) {
    let D2 = Array.from(
      { length: size },
      (_, index) => i * size + index * (size + 1)
    );
    D2 = D2.filter((num) => num < size * size && num >= 0);
    D2.forEach((j) => (ans[j]["D2"] = D2));
  }

  return ans;
};

export const moveToId = (move, size) => {
  return move
    .map((i) => {
      let char = String.fromCharCode(65 + (i % size));
      let num = size - Math.floor(i / size);
      return char + num;
    })
    .join("-");
};

export const IdToMove = (id, size) => {
  return id
    .split("-")
    .map(
      (sid) => (size - parseInt(sid.slice(1))) * size + (sid.charCodeAt(0) - 65)
    );
};
