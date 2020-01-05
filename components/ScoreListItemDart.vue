<template>
  <div class="w-full flex-none">
    <div class="player flex justify-between mb-2">
      <div class="player-name inline-flex text-gray-200 font-bold text-2xl">
        {{ playerInfo.name }}
      </div>
      <div class="player-score inline-flex text-gray-200 font-bold text-xl">
        {{ playerInfo.scoreLeft }}
      </div>
    </div>
    <div class="player-throws mt-1 flex">
      <div
        v-for="(value, index) in playerInfo.latestThrows"
        :key="index"
        class="w-1/4 mx-1 inline-flex bg-gray-600 h-10"
      >
        <span class="text-center font-bold">{{ value }}</span>
      </div>
      <div class="w-1/5 mx-2 inline-flex">
        <span class="text-right w-full text-gray-200">{{ totalThrow }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import { throwToScore } from "@/utils/dartScore"

export default {
  props: {
    playerInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    totalThrow() {
      const total = 0
      // for (let i = 0; i < this.playerInfo.latestThrows.length; i++) {
      //   total += parseInt(throwToScore(this.playerInfo.latestThrows[i]))
      // }
      return total
    }
  }
}
</script>

<style lang="scss" scoped>
.text-center {
  width: 100%;
}
</style>
