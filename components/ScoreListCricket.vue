<template>
  <div>
    <score-list-item
      v-for="(player, index) in playersInfo"
      :key="index"
      :player-info="player"
    />
  </div>
</template>

<script>
import { mapState } from "vuex"

import ScoreListItem from "~/components/ScoreListItemCricket"

export default {
  components: {
    ScoreListItem
  },
  computed: {
    ...mapState({
      playersInfo: (state) => state.darts.playersInfo
    })
  }
}
</script>
