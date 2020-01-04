import { throwToScore } from "@/utils/dartScore"

export const state = () => ({
  numOfThrows: 0,
  playerTurn: 0,
  startingScore: 501,
  playersInfo: [
    { name: "Dennis", scoreLeft: 501, latestThrows: ["", "", ""] },
    { name: "Piet", scoreLeft: 501, latestThrows: ["", "", ""] }
  ]
})

export const mutations = {
  addThrow(state, amount) {
    state.playersInfo[state.playerTurn].scoreLeft -= throwToScore(amount)

    state.numOfThrows++
    if (state.numOfThrows % 3 === 0) {
      if (state.playerTurn === 0) {
        state.playerTurn = 1
      } else {
        state.playerTurn = 0
      }
    }
  }
}

export const actions = {
  addThrow(context, amount) {
    context.commit("addThrow", amount)
  },
  changePlayer(context) {
    context.commit("changePlayer")
  }
}
