import Vue from 'vue'

let $event = new Vue()

const eventBus = {
  beforeCreate () {
    this.$event = $event

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
