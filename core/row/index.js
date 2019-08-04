import tableSwitch from '../switch/index.js';
import tableCheckbox from '../checkbox/index.js';
import Store from '../store/index.js';

export default {
  name: 'table-row',
  data () {
    return {
      checkbox_val: false,
      switch_val: false
    }
  },
  props: {
    isHead: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: function () {
        return {};
      }
    },
    allSelect: {
      type: Boolean,
      default: false
    },
    // row index
    rowIdx: Number
  },
  components: {
    tableSwitch,
    tableCheckbox
  },
  render (h) {
    var self = this;
    var tableCells = [];
    var types = Store.getState('types');
    Store.getState('keys').forEach(function (key, colIdx) {
      switch (types[colIdx]) {
        case 'text':
          tableCells.push(h('td', {staticClass: 'table-cell'}, self.data[key]));
        break;
        case 'checkbox':
          tableCells.push(h('td', {staticClass: 'table-cell'}, [
            h('table-checkbox', {
              attrs: {
                value: self.allSelect
              },
              on: {
                change: function (state) {
                  self.checkbox_val = state;
                  self.$emit('checkbox_change', state);
                }
              }
            })
          ]));
        break;
        case 'switch':
          tableCells.push(h('td', {staticClass: 'table-cell'}, [
            h('table-switch', {
              domProps: {
                checked: self.switch_val
              },
              on: {
                change: function (state) {
                  Store.getState('switchEvents')[colIdx](state, self.data);
                }
              }
            })
          ]));
        break;
      }
    });
    return h('tr', {
      staticClass: 'table-row'
    }, tableCells);
  }
}