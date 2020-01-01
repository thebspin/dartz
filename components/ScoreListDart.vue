<template>
  <div>
    <score-list-item v-for="index in 2" :key="index" />
  </div>
</template>

<script>
import ScoreListItem from "~/components/ScoreListItemCricket"

export default {
  components: {
    ScoreListItem
  }
}
</script>
