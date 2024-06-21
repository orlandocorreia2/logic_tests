function letterHunt(letterSearch, value) {
  let qtdLetters = 0;
  for (let i in value) {
    qtdLetters += value[i] === letterSearch ? 1 : 0;
  }
  return `This letter appears ${qtdLetters} time${qtdLetters > 1 ? "s" : ""}`;
}

console.log(letterHunt("o", "Orlando"));
