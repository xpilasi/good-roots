<template>
  <button :class="buttonClasses" v-bind="$attrs" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    buttonClasses() {
      const baseClasses = 'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

      const variants = {
        default: 'bg-black text-white hover:bg-black/90',
        outline: 'border border-gray-200 bg-white hover:bg-gray-100',
        ghost: 'hover:bg-gray-100'
      }

      const sizes = {
        default: 'h-10 px-4 py-2 text-base',
        sm: 'h-9 px-3 text-sm',
        lg: 'h-11 px-8 text-lg'
      }

      return `${baseClasses} ${variants[this.variant] || variants.default} ${sizes[this.size] || sizes.default} ${this.$attrs.class || ''}`
    }
  }
}
</script>
