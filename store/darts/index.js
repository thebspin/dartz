import { throwToScore } from "@/utils/darts"

export const state = () => ({
  numOfThrows: 0,
  playerTurn: 0,
  numPlayers: 2,
  startingScore: 501,
  latestThrows: [],
  playersInfo: [
    { name: "Dennis", scoreLeft: 501 },
    { name: "Piet", scoreLeft: 501 }
  ]
})

export const getters = {
  getPlayersInfo: (state) => {
    const playersInfo = []
    for (let i = 0; i < state.numPlayers; i++) {
      const player = {
        name: state.playersInfo[i].name,
        scoreLeft: state.playersInfo[i].scoreLeft,
        latestThrows: ["", "", ""]
      }
      playersInfo.push(player)
    }
    return playersInfo
  }
}

export const mutations = {
  addThrow(state, amount) {
    state.playersInfo[state.playerTurn].scoreLeft -= throwToScore(amount)
    state.latestThrows.push(amount)
    state.numOfThrows++

    if (state.numOfThrows % 3 === 0) {
      if (state.playerTurn === 0) {
        state.playerTurn = 1
      } else {
        state.playerTurn = 0
      }
    }
  }
  // addThrow(state, amount) {
  //   state.playersInfo[state.playerTurn].scoreLeft -= throwToScore(amount)
  //   state.playersInfo[state.playerTurn].latestThrows.splice(2, 1)
  //   state.playersInfo[state.playerTurn].latestThrows.unshift(amount)
  //   state.numOfThrows++
  //   if (state.numOfThrows % 3 === 0) {
  //     if (state.playerTurn === 0) {
  //       state.playerTurn = 1
  //     } else {
  //       state.playerTurn = 0
  //     }
  //     state.playersInfo[state.playerTurn].latestThrows = ["", "", ""]
  //   }
  // }
}

export const actions = {
  addThrow(context, amount) {
    context.commit("addThrow", amount)
  },
  changePlayer(context) {
    context.commit("changePlayer")
  }
}
