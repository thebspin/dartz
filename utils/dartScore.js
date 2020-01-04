export const throwToScore = (score) => {
  if (score === "bull") {
    return 25
  } else if (score === "bullseye") {
    return 50
  } else if (score === "out") {
    return 0
  }
  const scoreValue = score.match(/[a-z]+|[^a-z]+/gi)
  if (scoreValue[0] === "s") {
    return scoreValue[1]
  } else if (scoreValue[0] === "d") {
    return scoreValue[1] * 2
  } else if (scoreValue[0] === "t") {
    return scoreValue[1] * 3
  }
}
