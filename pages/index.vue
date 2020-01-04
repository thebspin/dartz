<template>
  <div class="flex bg-gray-700">
    <div class="container">
      <nuxt-link to="/darts">
        <div class="game-button">
          Darts
        </div>
      </nuxt-link>
      <nuxt-link to="/cricket">
        <div class="game-button">
          Cricket
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.game-button {
  @apply rounded border-4 border-gray-500 p-32 m-4 text-gray-500 text-6xl;
}

.game-button:hover {
  @apply border-gray-100 text-gray-100;
}

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
