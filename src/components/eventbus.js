const eventBus = {
  beforeCreate () {
    let parent = this.$parent
    while (parent && !this.$bus) {
      if (parent.$bus) {
        this.$bus = parent.$bus
      } else {
        parent = parent.$parent
      }
    }
  }
}

export default eventBus
