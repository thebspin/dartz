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
    <div class="player-throws mt-1">
      <div class="w-1/4 inline-flex p-1 bg-gray-600">
        <span class="text-center font-bold">T20</span>
      </div>
      <div class="w-1/4 inline-flex p-1 bg-gray-600">
        <span class="text-center font-bold">T20</span>
      </div>
      <div class="w-1/4 inline-flex p-1 bg-gray-600">
        <span class="text-center font-bold">T20</span>
      </div>
      <div class="w-1/5 inline-flex">
        <span class="text-right w-full text-gray-200">180</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playerInfo: {
      type: Object,
      default: () => {
        return {
          name: "Unknown"
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text-center {
  width: 100%;
}
</style>
