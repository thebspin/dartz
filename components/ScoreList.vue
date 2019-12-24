<template>
  <div>
    <score-list-item v-for="index in 4" :key="index" />
  </div>
</template>

<script>
import ScoreListItem from "~/components/ScoreListItem"

export default {
  components: {
    ScoreListItem
  }
}
</script>
