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
    var self = this;
    return h('label', {
      staticClass: 'table-checkbox',
      class: {'zero-state': self.stateZero}
    }, [
      h('input', {
        staticClass: 'checkbox-input',
        attrs: {
          type: 'checkbox'
        },
        domProps: {
          checked: self.inner_value
        },
        on: {
          change: () => {
            self.inner_value = event.target.checked;
          }
        }
      }),
      h('label', {
        staticClass: 'checkbox-label'
      })
    ]);
  }
};
