<template>
  <button :class="buttonClass" type="button" :disabled="disabled" @click="$emit('click')">
    <slot>
      <span v-if="loading && !icon" :class="iconClass"></span>
      <span v-if="icon" :class="iconClass"></span>
      <span class="p-button-label">{{label||'&nbsp;'}}</span>
    </slot>
  </button>
</template>

<script>
export default {
  name: 'UButton',
  props: {
    label: {
      type: String
    },
    icon: {
      type: String
    },
    iconPos: {
      type: String,
      default: 'left'
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingIcon: {
      type: String,
      default: 'pi pi-spinner pi-spin'
    }
  },
  computed: {
    buttonClass() {
      return {
        'p-button p-component': true,
        'p-button-icon-only': this.icon && !this.label,
        'p-button-vertical': (this.iconPos === 'top' || this.iconPos === 'bottom') && this.label,
        'p-disabled': this.$attrs.disabled || this.loading,
        'p-button-loading': this.loading,
        'p-button-loading-label-only': this.loading && !this.icon && this.label
      }
    },
    iconClass() {
      return [
        this.loading ? 'p-button-loading-icon ' + this.loadingIcon : this.icon,
        'p-button-icon',
        {
          'p-button-icon-left': this.iconPos === 'left' && this.label,
          'p-button-icon-right': this.iconPos === 'right' && this.label,
          'p-button-icon-top': this.iconPos === 'top' && this.label,
          'p-button-icon-bottom': this.iconPos === 'bottom' && this.label
        }
      ]
    },
    disabled() {
      return this.$attrs.disabled || this.loading;
    }
  },
}
</script>
