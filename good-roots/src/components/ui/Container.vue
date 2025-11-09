<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    as: {
      type: String,
      default: 'div'
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    containerClasses() {
      return {
        'px-6 md:px-16 lg:px-24': !this.noPadding
      }
    }
  }
}
</script>
