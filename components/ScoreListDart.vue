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
import { mapGetters } from "vuex"

import ScoreListItem from "~/components/ScoreListItemDart"

export default {
  components: {
    ScoreListItem
  },
  computed: {
    ...mapGetters({ playersInfo: "darts/getPlayersInfo" })
  }
}
</script>
