<template>
  <img
    :src="currentSrc"
    :alt="alt"
    :class="className"
    @error="handleError"
  />
</template>

<script>
export default {
  name: 'ImageWithFallback',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    fallbackSrc: {
      type: String,
      default: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%23999"%3EImage%3C/text%3E%3C/svg%3E'
    }
  },
  data() {
    return {
      currentSrc: this.src,
      hasError: false
    }
  },
  methods: {
    handleError() {
      if (!this.hasError) {
        this.hasError = true
        this.currentSrc = this.fallbackSrc
      }
    }
  },
  watch: {
    src(newSrc) {
      this.currentSrc = newSrc
      this.hasError = false
    }
  }
}
</script>
