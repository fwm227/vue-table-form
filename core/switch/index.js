export default {
  name: 'atom-switch',
  computed: {
    inner_value: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
        this.$emit('change', val);
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  render (h) {
    return h('label', {staticClass: 'table-switch'}, [
      h('input', {
        staticClass: 'switch-input',
        attrs: {
          type: 'checkbox'
        },
        domProps: {
          checked: this.inner_value
        },
        on: {
          change: () => {
            this.inner_value = event.target.checked;
          }
        }
      }),
      h('label', {
        staticClass: 'switch-label'
      })
    ]);
  }
};
