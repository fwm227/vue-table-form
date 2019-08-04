export default {
  name: 'table-checkbox',
  computed: {
    inner_value: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('change', val);
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    stateZero: {
      type: Boolean,
      default: false
    }
  },
  render (h) {
    return h('label', {staticClass: 'table-checkbox'}, [
      h('input', {
        staticClass: 'checkbox-input',
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
        staticClass: 'checkbox-label',
        class: {'zero-label': self.stateZero}
      })
    ]);
  }
};
