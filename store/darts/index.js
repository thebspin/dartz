export const state = () => ({
  numOfThrows: 0,
  playerTurn: 0
})

export const mutations = {
  addThrow(state) {
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
  addThrow(context) {
    context.commit("addThrow")
  },
  changePlayer(context) {
    context.commit("changePlayer")
  }
}
