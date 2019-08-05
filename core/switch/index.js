export default {
  name: 'atom-switch',
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
    color: {
      type: String,
      default: '#108ee9'
    }
  },
  render (h) {
    var self = this;
    return h('label', {staticClass: 'table-switch'}, [
      h('input', {
        staticClass: 'switch-input',
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
        staticClass: 'switch-label',
        style: {
          background: self.color
        }
      })
    ]);
  }
};
