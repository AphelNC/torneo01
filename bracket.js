const defaultRounds = [256, 128, 64, 32, 16, 8, 4, 2, 1]

export default {
  name: 'vue-tournament-bracket-generator',
  props: {
    bracketSize: {
      type: Number,
      default: 8
    },
    matchStyle: {
      type: Object,
      default: () => ({
        border: '2px solid green',
        width: '100%',
        height: '30px',
        position: 'relative'
      })
    }
  },
  computed: {
    rounds () {
      return defaultRounds.filter(rounds => rounds <= this.bracketSize)
    }
  }
}
