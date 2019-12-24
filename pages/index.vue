<template>
  <div class="flex h-screen">
    <div class="flex w-1/5 bg-gray-800 items-start content-start flex-col p-3">
      <score-list
        class="flex items-center justify-center flex-col flex-auto w-full"
      />
      <div class="actions w-full flex justify-between">
        <div class="left">
          <button @click="btnSettings" class="focus:outline-none">
            <span class="mdi mdi-36px mdi-cogs text-white" />
          </button>
          <button @click="btnMicrophone" class="focus:outline-none">
            <span
              v-if="microphone"
              class="mdi mdi-36px mdi-microphone-off text-white"
            />
            <span v-else class="mdi mdi-36px mdi-microphone text-white" />
          </button>
        </div>
        <div class="right">
          <button
            @click="btnUndo"
            class="mt-3 py-1 px-3 rounded bg-red-600 text-white"
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
import ScoreList from "~/components/ScoreList"

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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
