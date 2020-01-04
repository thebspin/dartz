<template>
  <div class="flex h-screen">
    <div class="flex w-1/5 bg-gray-800 items-start content-start flex-col p-3">
      <score-list
        class="flex items-center justify-center flex-col flex-auto w-full"
      />
      <div class="actions w-full flex justify-between">
        <div class="left">
          <button @click="btnSettings" class="focus:outline-none">
            <span
              class="mdi mdi-36px mdi-cogs text-white hover:text-gray-200"
            />
          </button>
          <button @click="btnMicrophone" class="focus:outline-none">
            <span
              v-if="microphone"
              class="mdi mdi-36px mdi-microphone-off text-white"
            />
            <span
              v-else
              class="mdi mdi-36px mdi-microphone text-white hover:text-gray-200"
            />
          </button>
        </div>
        <div class="right">
          <button
            @click="btnUndo"
            class="mt-3 py-1 px-3 rounded bg-red-600 text-white hover:text-gray-200"
          >
            Undo
          </button>
        </div>
      </div>
    </div>
    <div class="flex w-4/5 bg-gray-700 items-start content-start">
      <dartboard class="mx-auto pt-12" />
    </div>
  </div>
</template>

<script>
import Dartboard from "~/components/Dartboard"
import ScoreList from "~/components/ScoreListCricket"

export default {
  components: { Dartboard, ScoreList },
  data() {
    return {
      microphone: true
    }
  },
  methods: {
    btnSettings() {
      alert("Settings")
    },
    btnMicrophone() {
      this.microphone = !this.microphone
    },
    btnUndo() {
      alert("Undo")
    }
  }
}
</script>
